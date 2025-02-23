/*!
 * Copyright (c) 2023-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import { ReactNode, forwardRef, memo } from "react";

import type { SeleniumProps } from "./SeleniumProps";

export type BoxProps = {
  children?: ReactNode;
  component?: MuiBoxProps["component"];
  id?: MuiBoxProps["id"];
  sx?: MuiBoxProps["sx"];
} & SeleniumProps;

const Box = forwardRef<HTMLElement, BoxProps>(
  ({ children, component, id, sx, testId }, ref) => (
    <MuiBox
      ref={ref}
      children={children}
      component={component}
      data-se={testId}
      id={id}
      sx={sx}
    />
  )
);

const MemoizedBox = memo(Box);
MemoizedBox.displayName = "Box";

export { MemoizedBox as Box };
