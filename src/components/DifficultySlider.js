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
  <>
    <label>Difficulty</label>
    <input type="range" min="1" max="3" value={value} onChange={(e) => updateDifficulty(e.target.value)} />
  </>
);

export default connect(mapStateToProps, mapDispatchToProps)(DifficultySlider);
