import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

import ShipThatShit from "../images/svg/ship-that-sht.inline.svg"
import Ship from "../images/svg/ship.inline.svg"
import That from "../images/svg/that.inline.svg"
import Shit from "../images/svg/shit.inline.svg"
import "./main.css"

//   transition: 1000ms;

const Container = styled.div`
  text-align: center;

  animation: dropIn 1s ease-in-out 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const AlignedRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`

const Padded = styled.div`
  margin-top: 30px;
`

const OuterContainer = styled.div`
  min-height: 78vh;
`

const EventCard = styled.div`
  border-radius: 10px;
  max-width: 29%;
`

const Button = styled.button`
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-style: italic;
  font-weight: 900;
  font-size: 26px;
  color: #ea3635;
  background-color: #ead565;
`

const Main = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true)
    }, 1000)
  }, [])

  return (
    <OuterContainer>
      <Container>
        <AlignedRow>
          <Ship />
          <That />
          <Shit />
        </AlignedRow>

        {animationComplete && (
          <>
            <Padded>
              <h3>Join 3 no-bs events to help you ship that shit.</h3>
              <Button onClick={()=>{
                window.open(
                  'https://groups.joinglimpse.com/invite?groupInviteKey=7f6bd64493',
                  '_blank'
                );
              }}>Join Now</Button>

            </Padded>
            <Padded>
              <AlignedRow style={{ justifyContent: "center", alignItems: "flex-start" }}>
                <EventCard>
                  <div style={{}}>
                    <h4>Design Office Hours</h4>
                    <p>
                      Stop neglecting your design and come ask a designer for
                      some feedback. No strings attached, open office hour to
                      make sure your 🚢 is 🔥
                    </p>
                  </div>
                </EventCard>
                <EventCard>
                  <div style={{}}>
                    <h4>1-liner practice with YC Founders</h4>
                    <p>
                      Practice your 1-liner. Learning how to say what you do concisely by practicing. This "founder speed dating" will
                      pair you with other founders for 2 min, just long enough for 1-liners.
                    </p>
                  </div>
                </EventCard>
                <EventCard>
                  <div style={{}}>
                    <h4>Technical Office Hours</h4>
                    <p>
                      Run your technical design by the{" "}
                      <a
                        href="https://brev.dev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        brev.dev
                      </a>{" "}
                      CTO before you build it. Feel free to ask anything!
                    </p>
                  </div>
                </EventCard>
              </AlignedRow>
            </Padded>
          </>
        )}
      </Container>
    </OuterContainer>
  )
}

export default Main
