import React from 'react'
import Select, { Props } from 'react-select'
import { useColors } from '../../../theme/useColors'

const SearchSchemeSelect = ({ ...restProps }: Props) => {
  const colors = useColors()

  return (
    <Select
      styles={{
        container: (provided) => ({
          ...provided,
          width: '100%',
        }),
        control: () => ({
          display: 'flex',
          //  TODO
          border: `1px solid #E2E8F0`,
          borderRadius: '6px',
          height: '32px',
          lineHeight: '20px',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: colors.fontSecondary,
        }),
        option: (provided) => ({
          ...provided,
          height: '32px',
          lineHeight: '20px',
          whiteSpace: 'nowrap',
          backgroundColor: colors.backgroundPrimary,
          color: colors.fontSecondary,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: colors.backgroundPrimary,
          border: `1px solid ${colors.borderSecondary}`,
        }),
      }}
      maxMenuHeight={200}
      {...restProps}
    />
  )
}

export default SearchSchemeSelect
