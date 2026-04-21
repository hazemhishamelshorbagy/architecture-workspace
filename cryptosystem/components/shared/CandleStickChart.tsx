"use client";

import {
  getCandlestickConfig,
  getChartConfig,
  PERIOD_BUTTONS,
  PERIOD_CONFIG,
} from "@/constants";
import { fetcher } from "@/lib/coingeko.actions";
import { convertOHLCData } from "@/lib/utils";
import clsx from "clsx";
import {
  CandlestickSeries,
  createChart,
  IChartApi,
  ISeriesApi,
} from "lightweight-charts";
import { useEffect, useRef, useState, useTransition } from "react";

const CandleStickChart = ({
  children,
  data,
  coinId,
  height = 360,
  initialPeriod = "daily",

}: CandlestickChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
 
  const [period, setPeriod] = useState<Period>(initialPeriod);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const [ohlcData, setOhlcData] = useState<OHLCData[]>(data ?? []);
  const [isPending, startTransition] = useTransition();
  const fetchOhlcData = async (selectedPeriod: Period, coinId: string) => {
   
    try {
      const config = PERIOD_CONFIG[selectedPeriod];

      const newData = await fetcher<OHLCData[]>(`/coins/${coinId}/ohlc`, {
        vs_currency: "usd",
        days: config.days,
        precision: "full",
      });
      setOhlcData(newData ?? []);
    } catch (error) {
      console.error("Error fetching coin details:", error);
    } finally {
     
    }
  };

  const handlePeriodChange = (newPeriod: Period) => {
    if (newPeriod === period) return;
    startTransition(async () => {
      setPeriod(newPeriod);
      await fetchOhlcData(newPeriod, coinId);
    });
    // setLoading(true);
  };
  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;
    const showTime = ["hourly", "daily", "weekly", "monthly"].includes(period);
    const chart = createChart(container, {
      ...getChartConfig(height, showTime),
      width: container.clientWidth,
      height,
    });
    const series = chart.addSeries(CandlestickSeries, getCandlestickConfig());
    series.setData(convertOHLCData(ohlcData));
    chart.timeScale().fitContent();
    chartRef.current = chart;
    seriesRef.current = series;
    const handleResize = () => {
      chart.applyOptions({ width: container.clientWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
      chartRef.current = null;
      seriesRef.current = null;
    };
  }, [height, period]);

  useEffect(() => {
    if (seriesRef.current) {
      seriesRef.current.setData(convertOHLCData(ohlcData));
      if (chartRef.current) {
        chartRef.current.timeScale().fitContent();
      }
    }
  }, [ohlcData]);
  return (
    <div id="candlestick-chart">
      <div className="chart-header">
        <div className="flex-1">{children}</div>
        <div className="button-group">
          <span className="text-sm mx-2 font-medium text-purble-100/50">
            period:
          </span>
          {PERIOD_BUTTONS.map(({ value, label }) => (
            <button
              key={value}
              className={clsx(
                period === value ? "config-button-active" : "config-button",
              )}
              onClick={() => {
                handlePeriodChange(value);
              }}
              disabled={isPending}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div ref={chartContainerRef} className="chart" style={{ height }} />
    </div>
  );
};

export default CandleStickChart;
