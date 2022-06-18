import React, {useEffect, useState} from 'react'
import './Navpills.css'
import {StyledChip} from '../../styledComps/index'
import { useMain } from '../../helpers/context/main-context';

function Navpills() {
  const {state, dispatch, utilsState:{loading}} = useMain();
  const [isChipActive, setIsChipActive] = useState('')

  const isCategoryMatches = (category) => {
    return state.categories.find((x) => x.categoryName === category.categoryName)
  };

  useEffect(() => {
      return setIsChipActive({categoryName: "All"})
  }, [])


  const filterCategoryHandler = (category) => {
    setIsChipActive(() => isCategoryMatches(category))

    category.categoryName === 'ALL' ?
    dispatch({type: "EMPTY_FILTERED_ARRAY"}) :
    dispatch({type: "FILTER_CATEGORY", payload: category.categoryName})
  }


  return (
    <div className='Navpills'>
      { loading &&
        [...Array(20)].map((x, idx) => {
          return (
            <StyledChip key={idx} className='chip'>loading..</StyledChip>
          )
        })
      }
      {!loading && state.categories.map((category) => {
        return (
          <StyledChip 
            active={isChipActive.categoryName === category.categoryName} 
            key={category._id}
            className='chip'
            onClick={() => filterCategoryHandler(category)}>
            {category.categoryName}
          </StyledChip>
        )
      })}
    </div>
  )
}

export {Navpills}