import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const styles = {
  h3: {
    textAlign: 'left'
  }
}

export default (props) => {
  return (
    <Grid>
      <Row>

          <Col xs={12} md={10} mdOffset={2}>
          <h3 style={styles.h3}>Listen</h3>
            <ul style={{textAlign: 'left', listStyleType: 'none', margin: 'auto'}}><li>
            <span style={{fontSize: '200%'}}>L </span> listen nonjudgmentally and empathically gather
            </li><li>
            <span style={{fontSize: '200%'}}>I </span> gather Information, ask open questions, don't push
            </li><li>
            <span style={{fontSize: '200%'}}>S </span> assess people's risk of harm, Self-harm or Suicide
            </li><li>
            <span style={{fontSize: '200%'}}>T </span> tell them useful information about their problem, reassure
            </li><li>
            <span style={{fontSize: '200%'}}>E </span> encouraging self-help and other support strategies
            </li><li>
            <span style={{fontSize: '200%'}}>N </span> not alone, follow up and direct to appropriate professional help
            </li></ul>
          </Col>
        </Row>

        <Row>

        <Col xs={12} md={10} mdOffset={2}>
        <h3 style={styles.h3}>Conversation Starters</h3>
          <ul style={{'list-style-type': 'none'}}><li>
          Can you tell me a bit more about what happened?
          </li><li>
          How were you feeling at the time?
          </li><li>
          How are you feeling about it now?
          </li><li>
          What was going through your mind?
          </li><li>
          Where is this happening?
          </li><li>
          When things are at the worst they have been tell me how you were feeling?
          </li><li>
          Are there any other things stressing you out at the moment?
          </li><li>
          How are things at home?
          </li></ul>
          <ul style={{'list-style-type': 'none'}}><li>
          Is there any thing that helps when you are feeling like this?
          </li><li>
          Is there anyone you are close to who you can talk to about this?
          </li><li>
          This is something people often go through; would you like some more
          information about it?
          </li><li>
          Would you like to talk about this again?
          </li><li>
          This sounds really important and something you need help with, shall
          we book an appointment for you to talk to your personal advisor/the
          school counsellor/me again?
          </li></ul>
          </Col>
      </Row>

    </Grid>
  )
}
