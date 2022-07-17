import React from 'react'
import Select, { Props } from 'react-select'

const SearchSchemeSelect = ({ ...restProps }: Props) => {
  return (
    <Select
      styles={{
        container: (provided) => ({
          ...provided,
          width: '100%',
        }),
        control: () => ({
          display: 'flex',
          border: '1px solid #E2E8F0',
          borderRadius: '6px',
          height: '32px',
          lineHeight: '20px',
        }),
        option: (provided) => ({
          ...provided,
          height: '32px',
          lineHeight: '20px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }),
      }}
      maxMenuHeight={200}
      {...restProps}
    />
  )
}

export default SearchSchemeSelect
