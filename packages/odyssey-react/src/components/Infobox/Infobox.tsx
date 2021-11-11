/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React, { forwardRef } from "react";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { useCx, useOmit, withStyles } from "../../utils";
import { Heading } from "../Heading";
import { CautionIcon, CompleteIcon, ErrorIcon, GetInfoIcon } from "../Icon";
import styles from "./Infobox.module.scss";

interface CommonProps
  extends Omit<
    ComponentPropsWithRef<"aside">,
    "style" | "className" | "children" | "title" | "content"
  > {
  /**
   * Children are never rendered.
   */
  children?: never;
  /**
   * The visual variant to be displayed to the user.
   * @default info
   */
  variant?: "info" | "danger" | "caution" | "success";

  /**
   * The title or headline of the Infobox. If Infobox.Content is not present it is required.
   */
  title?: string;

  /**
   * Content to be rendered within the infobox.
   */
  content?: ReactNode;

  /**
   * Actions to be rendered within the infobox.
   */
  actions?: ReactNode;
}

interface TitleProps extends CommonProps {
  title: string;
}

interface ContentProps extends CommonProps {
  content: ReactNode;
}

export type InfoboxProps = TitleProps | ContentProps;

const icon = {
  caution: <CautionIcon />,
  danger: <ErrorIcon />,
  info: <GetInfoIcon />,
  success: <CompleteIcon />,
};

/**
 * An infobox is a type of alert that provides feedback in response to a
 * user action or system activity.
 */
let Infobox = forwardRef<HTMLElement, InfoboxProps>((props, ref) => {
  const { content, actions, title, variant = "info", ...rest } = props;

  const classNames = useCx(styles.root, styles[`${variant}Variant`]);
  const omitProps = useOmit(rest);

  return (
    <aside {...omitProps} ref={ref} className={classNames} role="status">
      <span className={styles.icon}>{icon[variant]}</span>
      {title && (
        <div className={styles.title}>
          <Heading visualLevel="6" children={title} />
        </div>
      )}
      {content && <section className={styles.content} children={content} />}
      {actions && <section className={styles.actions} children={actions} />}
    </aside>
  );
});

Infobox.displayName = "Infobox";

Infobox = withStyles(styles)(Infobox);

export { Infobox };