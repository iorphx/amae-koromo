import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, LabelList } from "recharts";
import { useAsyncFactory, formatPercent } from "../../utils/index";
import { getRankRateBySeat } from "../../data/source/misc";
import Loading from "../misc/loading";
import { useMemo, useState } from "react";
import { ModeSelector } from "../gameRecords/modeSelector";

const SEAT_LABELS = "东南西北";
const SEAT_COLORS = ["#003f5c", "#7a5195", "#ef5675", "#ffa600"];

const generateCells = (activeIndex: number) =>
  SEAT_COLORS.map((color, index) => (
    <Cell fill={color} fillOpacity={activeIndex === index ? 1 : 1} key={`cell-${index}`} />
  ));

const CELLS = generateCells(-1);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatLabel = (x: any) => (x.rate > 0 ? x.label : null);

function Chart({ rates, aspect = 1 }: { rates: [number, number, number, number]; aspect?: number }) {
  const items = useMemo(
    () =>
      rates.map((x, index) => ({
        rate: x,
        label: SEAT_LABELS[index]
      })),
    [rates]
  );
  return (
    <ResponsiveContainer width="100%" aspect={aspect} height="auto">
      <PieChart>
        <Pie isAnimationActive={false} data={items} nameKey="label" dataKey="rate" label={formatLabel}>
          {CELLS}
          <LabelList dataKey="rate" formatter={formatPercent} position="inside" fill="#fff" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default function RankBySeats() {
  const data = useAsyncFactory(getRankRateBySeat, []);
  const [modeId, setModeId] = useState("");
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <ModeSelector mode={modeId} onChange={setModeId} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="text-center">坐席吃一率</h3>
          <Chart rates={data[modeId || "0"][1]} />
        </div>
        <div className="col-lg-6">
          <h3 className="text-center">坐席吃四率</h3>
          <Chart rates={data[modeId || "0"][4]} />
        </div>
      </div>
    </>
  );
}
