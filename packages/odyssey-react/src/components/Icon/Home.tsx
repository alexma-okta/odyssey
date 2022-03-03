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

// Code automatically generated by svgr; DO NOT EDIT.

import React, { forwardRef } from "react";
import { useOmit } from "../../utils";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconNoChildrenProps } from "./types";

export type HomeIconProps = SvgIconNoChildrenProps;

export const HomeIcon = forwardRef<SVGSVGElement, HomeIconProps>(
  (props, ref) => {
    const omitProps = useOmit(props);
    return (
      <SvgIcon ref={ref} {...omitProps}>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6.5601L1.32428 6.26285L7.32428 0.762845L8 0.143431L8.67573 0.762845L14.6757 6.26285L15 6.5601V7V12.4985L15 12.525C15 12.7351 15 12.9397 14.9882 13.1138C14.9752 13.3041 14.9447 13.5299 14.8478 13.7639C14.6448 14.254 14.2554 14.6433 13.7654 14.8463C13.5313 14.9432 13.3056 14.9737 13.1152 14.9867C12.9411 14.9986 12.7365 14.9986 12.5265 14.9985L12.5 14.9985H11H10V13.9985V10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10V13.9985V14.9985H5H3.5L3.47352 14.9985C3.26348 14.9986 3.05886 14.9986 2.88478 14.9867C2.6944 14.9737 2.46868 14.9432 2.23464 14.8463C1.74458 14.6433 1.35523 14.254 1.15224 13.7639C1.0553 13.5299 1.02483 13.3041 1.01184 13.1138C0.99996 12.9397 0.999981 12.7351 1 12.525L1 12.4985V7V6.5601ZM8 1.5L2 7V12.4985C2 12.9645 2 13.1975 2.07612 13.3812C2.17762 13.6263 2.37229 13.8209 2.61732 13.9224C2.80109 13.9985 3.03406 13.9985 3.5 13.9985H4H5V12.9985V10C5 8.34315 6.34315 7 8 7C9.65686 7 11 8.34314 11 10V12.9985V13.9985H12H12.5C12.9659 13.9985 13.1989 13.9985 13.3827 13.9224C13.6277 13.8209 13.8224 13.6263 13.9239 13.3812C14 13.1975 14 12.9645 14 12.4985V7L8 1.5Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    );
  }
);

HomeIcon.displayName = "HomeIcon";
