"use client";

import { updateWork, deleteWork } from "@/db/mutations/work";

import { WorkForm } from "./work-form";

import type { WorkFormValues } from "@/app/components/admin/work/schema";
import type { Category, Tag, Work, WorkTag } from "@/db/schema";

type AdminEditWorkProps = {
  work: Work;
  categories: Category[];
  tags: Tag[];
  workTags: (WorkTag & { tag: Tag })[];
};
function AdminEditWork({ work, categories, tags, workTags }: AdminEditWorkProps) {
  const onSubmit = async (payload: WorkFormValues) => {
    return updateWork(work.id, payload);
  };

  const onRemove = async () => {
    return deleteWork(work.id);
  };

  return (
    <WorkForm
      work={work}
      categories={categories}
      tags={tags}
      workTags={workTags}
      onSubmit={onSubmit}
      onRemove={onRemove}
    />
  );
}

export { AdminEditWork };
