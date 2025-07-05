import EditTemplate from "@/components/EditTemplate";
import EditView from "@/components/EditView";
import React from "react";

export default function edit() {
  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <EditTemplate></EditTemplate>
      </div>
      <div className="w-3/4">
        <EditView></EditView>
      </div>
    </div>
  );
}
