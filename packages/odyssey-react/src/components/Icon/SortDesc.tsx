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

const SortDesc = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <Icon ref={ref} {...omitProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.2929 12.7071C6.68343 13.0976 7.31659 13.0976 7.70712 12.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289C11.3166 6.90237 10.6834 6.90237 10.2929 7.29289L8.00001 9.58579V2C8.00001 1.4477 7.55229 1 7.00001 1C6.44773 1 6.00001 1.4477 6.00001 2V9.58579L3.70711 7.29289C3.31658 6.90237 2.68342 6.90237 2.29289 7.29289C1.90237 7.68342 1.90237 8.31658 2.29289 8.70711L6.2929 12.7071Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
});

export default SortDesc;
