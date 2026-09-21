"use client";
import { BooksContext } from "@/context/booksContext";
import { IBooksType } from "@/types/books.types";
import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#10B981",
  "#06B6D4",
  "#8B5CF6",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#6366F1",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} fontWeight={700} />;
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: IBooksType, index: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });

  const totalPages = readBooks.reduce(
    (total, book) => total + book.totalPages,
    0
  );

  const averagePages =
    readBooks.length > 0
      ? Math.round(totalPages / readBooks.length)
      : 0;

  return (
    <section className="container mx-auto my-8 px-4">
      {readBooks.length > 0 ? (
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-100/40">
          {/* Header */}
          <div className="border-b border-gray-100 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-lg bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    📚 Reading Statistics
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                  Your Reading Progress
                </h2>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                  Track the number of pages in the books you have read.
                </p>
              </div>

              {/* Summary */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-emerald-600">
                    {readBooks.length}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Books Read
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-100 bg-white px-5 py-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-cyan-600">
                    {totalPages}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Total Pages
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small Statistics */}
          <div className="grid grid-cols-1 gap-4 border-b border-gray-100 p-6 sm:grid-cols-3 sm:p-8">
            <div className="rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm font-medium text-gray-500">
                Books Completed
              </p>

              <p className="mt-2 text-3xl font-bold text-emerald-600">
                {readBooks.length}
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-50 p-5">
              <p className="text-sm font-medium text-gray-500">
                Pages Read
              </p>

              <p className="mt-2 text-3xl font-bold text-cyan-600">
                {totalPages}
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-5">
              <p className="text-sm font-medium text-gray-500">
                Average Pages
              </p>

              <p className="mt-2 text-3xl font-bold text-violet-600">
                {averagePages}
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="p-5 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Pages Per Book
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Compare the total pages of your read books.
              </p>
            </div>

            <div className="h-100 w-full sm:h-125">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 30,
                    right: 20,
                    left: 0,
                    bottom: 60,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E5E7EB"
                  />

                  <XAxis
                    dataKey="name"
                    angle={-25}
                    textAnchor="end"
                    interval={0}
                    height={80}
                    tick={{
                      fill: "#6B7280",
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    tick={{
                      fill: "#6B7280",
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    cursor={{
                      fill: "#ECFDF5",
                    }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #D1FAE5",
                      boxShadow:
                        "0 10px 25px rgba(0,0,0,0.08)",
                    }}
                    formatter={(value) => [
                      `${value} pages`,
                      "Pages",
                    ]}
                  />

                  <Bar
                    dataKey="uv"
                    shape={TriangleBar}
                    activeBar
                    radius={[8, 8, 0, 0]}
                  >
                    <LabelList
                      content={CustomColorLabel}
                      position="top"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex min-h-112.5 items-center justify-center rounded-3xl border border-dashed border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 px-6">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-5xl">
              📚
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-800">
              No Read Books Yet
            </h2>

            <p className="mt-3 text-gray-500">
              Start reading some books and your reading
              statistics will appear here.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReadBooks;