import React from 'react';
import { connect } from 'react-redux';
import { updateDifficulty } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    updateDifficulty: d => dispatch(updateDifficulty(d))
  };
}

const mapStateToProps = state => ({
  value: state.game.difficulty,
});

const DifficultySlider = ({ value, updateDifficulty }) => (
  <div
  style={{
    position: 'fixed',
    padding: '10px 20px',
    top: '10px',
    left: '10px',
    backgroundColor: 'white',
    borderRadius: '10px',
  }}>
    <label>Difficulty {value}</label>
    <br/>
    <input type="range" min="1" max="3" value={value} onChange={(e) => updateDifficulty(e.target.value)} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(DifficultySlider);
