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

import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { useOmit } from "../../utils";
import Icon from "./Icon";

export interface Props
  extends Omit<ComponentPropsWithRef<"svg">, "style" | "className"> {
  title?: string;
  titleId?: string;
}

const Download = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <Icon ref={ref} {...omitProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 2C8 1.44772 7.55228 1 7 1C6.44772 1 6 1.44772 6 2L5.99928 6.58577L3.91421 4.08579C3.52369 3.69526 2.89052 3.69526 2.5 4.08579C2.10948 4.47631 2.10948 5.10948 2.5 5.5L6.29218 9.70709C6.6827 10.0976 7.31587 10.0976 7.70639 9.70709L11.5 5.5C11.8905 5.10948 11.8905 4.47631 11.5 4.08579C11.1095 3.69526 10.4763 3.69526 10.0858 4.08579L7.99928 6.58577L8 2Z"
          fill="currentColor"
        />
        <path
          d="M3 9.00008C3 8.44779 2.55228 8.00008 2 8.00008C1.44772 8.00008 1 8.44779 1 9.00008V12.0001C1 12.5524 1.44772 13.0001 2 13.0001H12C12.5523 13.0001 13 12.5524 13 12.0001V9.00008C13 8.44779 12.5523 8.00008 12 8.00008C11.4477 8.00008 11 8.44779 11 9.00008V11.0001H3V9.00008Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
});

export default Download;
