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

import { FormGroup as MuiFormGroup } from "@mui/material";
import { memo, ReactElement, useCallback } from "react";

import { Checkbox } from "./Checkbox";
import { Field } from "./Field";

export type CheckboxGroupProps = {
  /**
   * A single Checkbox element or an array of Checkbox elements
   */
  children:
    | ReactElement<typeof Checkbox>
    | Array<ReactElement<typeof Checkbox>>;
  /**
   * The error message for the CheckboxGroup
   */
  errorMessage?: string;
  /**
   * The hint text for the CheckboxGroup
   */
  hint?: string;
  /**
   * The id of the `input` element. This will also be the input's `name` field.
   */
  id?: string;
  /**
   * If `true`, the CheckboxGroup is disabled
   */
  isDisabled?: boolean;
  /**
   * If `true`, the CheckboxGroup is required
   */
  isRequired?: boolean;
  /**
   * The label text for the CheckboxGroup
   */
  label: string;
};

const CheckboxGroup = ({
  children,
  errorMessage,
  hint,
  id: idOverride,
  isDisabled,
  isRequired = false,
  label,
}: CheckboxGroupProps) => {
  const renderFieldComponent = useCallback(
    ({ ariaDescribedBy, id }) => (
      <MuiFormGroup aria-describedby={ariaDescribedBy} id={id}>
        {children}
      </MuiFormGroup>
    ),
    [children]
  );

  return (
    <Field
      errorMessage={errorMessage}
      fieldType="group"
      hasVisibleLabel={true}
      hint={hint}
      id={idOverride}
      isDisabled={isDisabled}
      isOptional={!isRequired}
      label={label}
      renderFieldComponent={renderFieldComponent}
    />
  );
};

const MemoizedCheckboxGroup = memo(CheckboxGroup);
MemoizedCheckboxGroup.displayName = "CheckboxGroup";

export { MemoizedCheckboxGroup as CheckboxGroup };