"use client";

import React from "react";

export const LocalTime = ({ date }) => {
  const formatDate = (dateLike) => {
    if (!dateLike) return null;
    try {
      const d = new Date(dateLike);
      if (isNaN(d)) return null;
      return d.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "short",
        day: "numeric",
        // timeZoneName: "short", // <- shows EDT, PST, etc.
      });
    } catch {
      return null;
    }
  };

  return <div>{formatDate(date)}</div>;
};