import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import { gameStartRequested, gameStop, clickTarget } from '../actions';
import ButtonStop from '../components/ButtonStop';
import DifficultySlider from '../components/DifficultySlider';

const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted,
  targets: state.targets,
});

const GameLayout = ({ isStarted, lives, score, dispatch, targets }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >
    {isStarted ? (
      <>
        <Info lives={lives} score={score} />
        {
          targets.map((t) => <Target key={t.id} x={t.x} y={t.y} value={t.v} onClick={() => dispatch(clickTarget(t.id))} />)
        }
        <ButtonStop onClick={() => dispatch(gameStop())} />
      </>
    ) : (
        <>
          <ButtonStart onClick={() => dispatch(gameStartRequested())} />
          <DifficultySlider />
        </>
      )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
