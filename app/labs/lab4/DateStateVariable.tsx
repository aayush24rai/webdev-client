"use client";
import { useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");
// Uses local getters (not toISOString) so server and client render the same string
export const dateObjectToHtmlDateString = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
export const htmlDateStringToDate = (value: string, previous: Date) => {
  if (!value) return previous;
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d, previous.getHours(), previous.getMinutes());
};

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date(2026, 0, 15, 10, 30));
  const [dueDate, setDueDate] = useState(new Date(2026, 0, 22, 10, 30));
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <p>Start: {dateObjectToHtmlDateString(startDate)}</p>
      <input
        id="wd-start-date"
        type="date"
        className="border p-1"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(htmlDateStringToDate(e.target.value, startDate))}
      />
      <p>Due: {dateObjectToHtmlDateString(dueDate)}</p>
      <input
        id="wd-due-date"
        type="date"
        className="border p-1"
        value={dateObjectToHtmlDateString(dueDate)}
        onChange={(e) => setDueDate(htmlDateStringToDate(e.target.value, dueDate))}
      />
      <hr />
    </div>
  );
}
