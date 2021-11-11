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

// Code automatically generated by svgr; DO NOT EDIT.

import React, { forwardRef } from "react";
import { useOmit } from "../../utils";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconNoChildrenProps } from "./types";

export type SortAscIconProps = SvgIconNoChildrenProps;

const SortAscIcon = forwardRef<SVGSVGElement, SortAscIconProps>(
  (props, ref) => {
    const omitProps = useOmit(props);
    return (
      <SvgIcon ref={ref} {...omitProps}>
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.2929 1.29289C6.68343 0.902369 7.31659 0.902369 7.70712 1.29289L11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711C11.3166 7.09763 10.6834 7.09763 10.2929 6.70711L8.00001 4.41421V12C8.00001 12.5523 7.55229 13 7.00001 13C6.44773 13 6.00001 12.5523 6.00001 12V4.41421L3.70711 6.70711C3.31658 7.09763 2.68342 7.09763 2.29289 6.70711C1.90237 6.31658 1.90237 5.68342 2.29289 5.29289L6.2929 1.29289Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    );
  }
);

SortAscIcon.displayName = "SortAscIcon";

export { SortAscIcon };