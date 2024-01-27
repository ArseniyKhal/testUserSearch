import { useState } from 'react'
import { findFollowers } from '../../service/api'
import * as S from './ResultItem.styles'

export const ResultItem = ({ dataItem }) => {
  const [isVisibleUser, setIsVisibleUser] = useState(false)
  const [followers, setFollowers] = useState(null)
  const login = dataItem.login

  let foundUsersData
  const requestData = async () => {
    try {
      foundUsersData = await findFollowers(login)
      if (foundUsersData) {
        setFollowers(foundUsersData)
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  const handleClickUser = () => {
    setIsVisibleUser(!isVisibleUser)
    if (!isVisibleUser) {
      requestData()
    }
  }

  let followersSum = followers?.followersData.length
  if (followersSum >= 100) {
    followersSum = 'more than 100'
  }
  let followingSum = followers?.followingData.length
  if (followingSum >= 100) {
    followingSum = 'more than 100'
  }
  return (
    <S.ResultsItem
      onClick={() => handleClickUser()}
      style={{
        height: `${isVisibleUser ? '200px' : ''}`,
        gridTemplateColumns: `${isVisibleUser ? '200px 1fr ' : ''}`,
      }}
    >
      <S.ResultsItemCol1>
        <S.ItemPicture>
          <S.ItemImg src={dataItem.avatar_url} alt="user avatar"></S.ItemImg>
        </S.ItemPicture>
      </S.ResultsItemCol1>
      {!isVisibleUser ? (
        <>
          <S.ResultsItemCol2>{dataItem.login}</S.ResultsItemCol2>
          <S.ResultsItemCol3>
            <S.ItemLink href={dataItem.html_url}>
              {dataItem.html_url}
            </S.ItemLink>
          </S.ResultsItemCol3>
        </>
      ) : (
        <>
          <S.ResultsItemCol2 style={{ fontSize: '22px' }}>
            <p>Login: {dataItem.login}</p>
            <p>
              GitHub pages:
              <S.ItemLink href={dataItem.html_url}>
                {dataItem.html_url}
              </S.ItemLink>
            </p>
            {followers && (
              <>
                <p>Followers: {followersSum}</p>
                <p>Following: {followingSum}</p>
              </>
            )}
          </S.ResultsItemCol2>
        </>
      )}
    </S.ResultsItem>
  )
}
