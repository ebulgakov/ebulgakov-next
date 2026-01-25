"use client";

import { WorkForm } from "@/app/components/admin/work/work-form";
import { addWork } from "@/db/mutations/work";

import type { Category, Tag } from "@/db/schema";
import type { PayloadWork } from "@/types/common";

type AdminNewWorkProps = {
  categories: Category[];
  tags: Tag[];
};

function AdminNewWork({ categories, tags }: AdminNewWorkProps) {
  const newWork = {
    title: "",
    previewDescription: "",
    description: "",
    year: "",
    isPublished: false,
    slug: "",
    productionUrl: "",
    staticUrl: "",
    images: []
  };

  const onSubmit = async (payload: PayloadWork) => {
    try {
      await addWork(payload);
    } catch (error) {
      console.error("Failed to update work:", error);
      alert("Failed to update work. Please try again.");
    }
  };

  return (
    <WorkForm
      work={newWork}
      categories={categories}
      tags={tags}
      workTags={[]}
      onSubmit={onSubmit}
    />
  );
}

export { AdminNewWork };
