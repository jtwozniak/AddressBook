import React from "react"
import styled from "styled-components"
import { User } from "../../api/user"

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const Section = styled.section`
  position: fixed;
  background: white;
  width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  color: black;
  padding: 1em;
`

const FlexDiv = styled.div`
  padding-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

type Props = {
  user: User
  closeModal: () => void
}

// It is not 'real modal' implementation, it would quite time consuming to create proper one
// and there is no good selection of modal component libraries on npm
export const DetailsModal = ({
  user: {
    location: {
      street: { number, name },
      city,
      state,
      postcode,
    },
    phone,
    cell,
  },
  closeModal,
}: Props) => {
  return (
    <Modal onClick={closeModal}>
      <Section onClick={(event) => event.stopPropagation()}>
        <div>Address: {[number, name, city, state, postcode].join(" ")}</div>
        <FlexDiv>
          <div>Phone: {phone}</div>
          <div>Cell: {cell}</div>
        </FlexDiv>
      </Section>
    </Modal>
  )
}
