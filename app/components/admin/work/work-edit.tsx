"use client";

import { updateWork } from "@/db/mutations/work";

import { WorkForm } from "./work-form";

import type { Category, Tag, Work, WorkTag } from "@/db/schema";
import type { PayloadWork } from "@/types/common";

type AdminEditWorkProps = {
  work: Work;
  categories: Category[];
  tags: Tag[];
  workTags: (WorkTag & { tag: Tag })[];
};
function AdminEditWork({ work, categories, tags, workTags }: AdminEditWorkProps) {
  const onSubmit = async (payload: PayloadWork) => {
    try {
      await updateWork(work.id, payload);
    } catch (error) {
      console.error("Failed to update work:", error);
      alert("Failed to update work. Please try again.");
    }
  };

  return (
    <WorkForm
      work={work}
      categories={categories}
      tags={tags}
      workTags={workTags}
      onSubmit={onSubmit}
    />
  );
}

export { AdminEditWork };
