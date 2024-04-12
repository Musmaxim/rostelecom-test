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
import { useState } from "react";
import { EarthoOneProvider } from "@eartho/one-client-react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const showQuickViewModal = useUnit($showQuickViewModal);
  const showSizeTable = useUnit($showSizeTable);
  const openAuthPopup = useUnit($openAuthPopup);

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody();
    closeQuickViewModal();
  };

  const handleCloseSizeTable = () => closeSizeTableByCheck(showQuickViewModal);

  return (
    <>
      {isClient && (
        //@ts-ignore
        <EarthoOneProvider clientId={`${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`}>

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
              className={`auth-overlay ${
                openAuthPopup ? "overlay-active" : ""
              }`}
              onClick={handleCloseAuthPopup}
            />
            <Toaster position="top-center" reverseOrder={false} />
          </body>
        </html>

        </EarthoOneProvider>
      )}
    </>
  );
};

export default PageLayout;
