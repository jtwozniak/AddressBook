import React from "react"
import styled from "styled-components"

const Loading = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

type Props = {
  loading: boolean
  noMoreData: boolean
}

export const Footer = ({ loading, noMoreData }: Props) => {
  return (
    <Div>
      {loading && <Loading />}
      {noMoreData && "Downlaoded whole users catalog"}
    </Div>
  )
}
