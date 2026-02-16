"use client";

import { WorkForm } from "@/app/components/admin/work/work-form";
import { addWork } from "@/db/mutations/work";

import type { Category, NewWork, Tag } from "@/db/schema";
import type { PayloadWork } from "@/types/common";

type AdminNewWorkProps = {
  categories: Category[];
  tags: Tag[];
};

function AdminNewWork({ categories, tags }: AdminNewWorkProps) {
  const newWork: NewWork = {
    title: "",
    titleRu: "",
    previewDescription: "",
    previewDescriptionRu: "",
    description: "",
    descriptionRu: "",
    year: "",
    isPublished: false,
    slug: "",
    productionUrl: "",
    staticUrl: "",
    images: []
  };

  const onSubmit = async (payload: PayloadWork) => {
    return addWork(payload);
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
