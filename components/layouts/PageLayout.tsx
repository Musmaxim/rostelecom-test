"use client";

import {
  $showQuickViewModal,
  $showSizeTable,
  closeQuickViewModal,
} from "@/context/modals";
import Layout from "./Layout";
import { useUnit } from "effector-react";
import {
  closeSizeTableByCheck,
  handleCloseAuthPopup,
  removeOverflowHiddenFromBody,
} from "@/lib/utils/common";
import { $openAuthPopup } from "@/context/auth";
import { Toaster } from "react-hot-toast";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const showQuickViewModal = useUnit($showQuickViewModal);
  const showSizeTable = useUnit($showSizeTable);
  const openAuthPopup = useUnit($openAuthPopup);

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody();
    closeQuickViewModal();
  };

  const handleCloseSizeTable = () => closeSizeTableByCheck(showQuickViewModal);

  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <div
          className={`quick-view-modal-overlay ${
            showQuickViewModal ? "overlay-active" : ""
          }`}
          onClick={handleCloseQuickViewModal}
        />
        <div
          className={`size-table-overlay ${
            showSizeTable ? "overlay-active" : ""
          }`}
          onClick={handleCloseSizeTable}
        />
        <div
          className={`auth-overlay ${openAuthPopup ? "overlay-active" : ""}`}
          onClick={handleCloseAuthPopup}
        />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
};

export default PageLayout;