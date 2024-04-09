"use client";

import { $showQuickViewModal, closeQuickViewModal } from "@/context/modals";
import Layout from "./Layout";
import { useUnit } from "effector-react";
import { removeOverflowHiddenFromBody } from "@/lib/utils/common";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const showQuickViewModal = useUnit($showQuickViewModal);

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody();
    closeQuickViewModal();
  };
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <div
          className={`quick-view-modal-ovrlay ${
            showQuickViewModal ? "overlay-active" : ""
          }`}
          onClick={handleCloseQuickViewModal}
        />
      </body>
    </html>
  );
};

export default PageLayout;
