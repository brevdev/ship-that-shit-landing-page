import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Grid } from "@material-ui/core"
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

const Button = styled.button`
  border: none;
  padding: 15px;
  border-radius: 30px;
  font-style: italic;
  font-weight: 900;
  font-size: 42px;
  color: #ea3635;
  color: #303030;
  background-color: #ead565;
  box-shadow: 6px -4px 0px 3px rgb(17 17 17);
  cursor: pointer;
  font-family: "Selfie" !important;
  min-width: 30%;
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
          <Ship
            style={{
              transform: "translateX(27%)",
              width: "100%",
            }}
          />
          <That style={{ width: "60%", zIndex: "3" }} className={"rotate"} />
          <Shit
            style={{
              transform: "translateX(-27%)",
              width: "100%",
            }}
          />
        </AlignedRow>
        <AlignedRow></AlignedRow>

        {animationComplete && (
          <>
            <Padded>
              <h1>Join 3 no-bs events to help you ship that shit.</h1>
              <Button
                onClick={() => {
                  window.open(
                    "https://groups.joinglimpse.com/invite?groupInviteKey=7f6bd64493",
                    "_blank"
                  )
                }}
              >
                Join Now
              </Button>
            </Padded>
            <Padded>
              <Grid
                container
                direction={"row"}
                justify="space-evenly"
                alignItems="flex-start"
              >
                <Grid item xs={12} sm={3}>
                  <div style={{}}>
                    <h4>Design Office Hours 🎨</h4>
                    <p>
                      Stop neglecting your design and come ask a designer for
                      some feedback. No strings attached, open office hour to
                      make sure your 🚢 is 🔥
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{}}>
                    <h4>1-liner practice with YC Founders 💬</h4>
                    <p>
                      Practice your 1-liner. Learning how to say what you do
                      concisely by practicing. This "founder speed dating" will
                      pair you with other founders for 2 min, just long enough
                      for 1-liners.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{}}>
                    <h4>Technical Office Hours 💾</h4>
                    <p>
                      Run your technical design by the{" "}
                      <a
                        href="https://brev.dev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        brev.dev
                      </a>{" "}
                      technical team before you build it. Feel free to ask anything!
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  {/* <Button
                    onClick={() => {
                      window.open(
                        "https://groups.joinglimpse.com/invite?groupInviteKey=4bdbf7ed0b",
                        "_blank"
                      )
                    }}
                    className={"notMobile"}
                  >
                    Join Now
                  </Button> */}
                </Grid>
              </Grid>
            </Padded>
          </>
        )}
      </Container>
    </OuterContainer>
  )
}

export default Main
