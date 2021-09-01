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

const Settings = forwardRef<SVGSVGElement, Props>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <Icon ref={ref} {...omitProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.7918 8.31498L11.6591 7.45248C11.6943 7.15145 11.6943 6.84752 11.6591 6.54649L12.7928 5.6835C13.0053 5.51688 13.062 5.22471 12.9268 4.99399L11.7485 3.0105C11.6128 2.77833 11.3237 2.67694 11.0672 2.77151L9.73219 3.29452C9.48134 3.11729 9.21262 2.96534 8.93019 2.84103L8.72532 1.46002C8.68838 1.1949 8.4548 0.997838 8.18005 1.00002H5.81822C5.54575 0.998424 5.31405 1.19328 5.27602 1.45602L5.07065 2.841C4.78909 2.96651 4.5208 3.11857 4.26968 3.29501L2.93111 2.771C2.6772 2.67352 2.38841 2.77369 2.25491 3.00549L1.07552 4.99249C0.936676 5.22358 0.993837 5.51897 1.20953 5.685L2.34218 6.54749C2.30673 6.8485 2.30673 7.15248 2.34218 7.45349L1.2085 8.31599C0.99569 8.48237 0.938649 8.77471 1.07398 9.00549L2.25183 10.9895C2.38738 11.2218 2.6766 11.3233 2.93316 11.2285L4.26812 10.7055C4.51919 10.8828 4.78807 11.0349 5.07063 11.1595L5.276 12.5395C5.31215 12.8039 5.54428 13.0011 5.81819 13H8.18002C8.453 13.0021 8.68544 12.8072 8.72376 12.544L8.92913 11.159C9.21067 11.0334 9.47893 10.8814 9.7301 10.705L11.0702 11.2295C11.3241 11.3267 11.6127 11.2266 11.7464 10.995L12.9294 9.00001C13.0618 8.76962 13.0036 8.47979 12.7918 8.31498ZM6.99912 9.49998C5.5813 9.49998 4.4319 8.3807 4.4319 6.99998C4.4319 5.61925 5.58127 4.49998 6.99912 4.49998C8.41697 4.49998 9.56634 5.61925 9.56634 6.99998C9.56463 8.38002 8.41625 9.49834 6.99912 9.49998Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
});

export default Settings;
