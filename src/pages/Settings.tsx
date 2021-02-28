import React, { useCallback, useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { Button } from "../comps/Button"
import { getNationalityLink, NationalityLink } from "../comps/NationalityLink"
import { NationalitySelect, OptionsMap } from "../comps/NationalitySelect"
import { PageLayout } from "../comps/PageLayout"
import { useNationality } from "../comps/useNationality"

const H2 = styled.h2`
  align-content: center;
  text-align: center;
  margin-top: 5em;
`

export const Settings = () => {
  const initialNationality = useNationality()
  const [nationality, setNationality] = useState(initialNationality)
  const history = useHistory()

  const onApply = useCallback(() => {
    history.push(
      getNationalityLink(
        // this is done to maintain no param in url when All is selected
        OptionsMap.All === nationality ? null : nationality,
        "/settings"
      )
    )
  }, [nationality])

  return (
    <PageLayout>
      <H2>
        Select nationality:
        <NationalitySelect value={nationality} onChange={setNationality} />
        <Button onChange={onApply}>Apply</Button>
      </H2>
      <H2>
        <NationalityLink to={"/"}>Back to main page</NationalityLink>
      </H2>
    </PageLayout>
  )
}
