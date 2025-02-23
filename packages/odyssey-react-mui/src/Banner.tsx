/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Alert, AlertColor, AlertTitle, AlertProps } from "@mui/material";
import { Link } from "./Link";
import { ScreenReaderText } from "./ScreenReaderText";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import type { SeleniumProps } from "./SeleniumProps";

export const bannerRoleValues = ["status", "alert"] as const;
export const bannerSeverityValues: AlertColor[] = [
  "success",
  "info",
  "warning",
  "error",
];

export type BannerProps = {
  /**
   * If linkUrl is not undefined, this is the text of the link.
   * If left blank, it defaults to "Learn more".
   * Note that linkText does nothing if linkUrl is not defined
   */
  linkText?: string;
  /**
   * If defined, the alert will include a link to the URL
   */
  linkUrl?: string;
  /**
   * The function that's fired when the user clicks the close button. If undefined,
   * the close button will not be shown.
   */
  onClose?: AlertProps["onClose"];
  /**
   * Sets the ARIA role of the alert
   * ("status" for something that dynamically updates, "alert" for errors, null for something
   * unchanging)
   */
  role?: (typeof bannerRoleValues)[number];
  /**
   * Determine the color and icon of the alert
   */
  severity: (typeof bannerSeverityValues)[number];
  /**
   * The text content of the alert
   */
  text: string;
} & SeleniumProps;

const Banner = ({
  linkUrl,
  linkText,
  onClose,
  role,
  severity,
  text,
  testId,
}: BannerProps) => {
  const { t } = useTranslation();

  return (
    <Alert
      data-se={testId}
      onClose={onClose}
      role={role}
      severity={severity}
      variant="banner"
    >
      <ScreenReaderText>{t(`severity.${severity}`)}:</ScreenReaderText>
      <AlertTitle>{text}</AlertTitle>
      {linkUrl && (
        <Link href={linkUrl} variant="monochrome">
          {linkText}
        </Link>
      )}
    </Alert>
  );
};

const MemoizedBanner = memo(Banner);
MemoizedBanner.displayName = "Banner";

export { MemoizedBanner as Banner };
