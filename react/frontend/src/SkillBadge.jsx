function SkillBadge({ name, level }) {
  return (
    <div style={{
      border: '1px solid white',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      color: 'white'
    }}>
      <h3>{name}</h3>
      <p>Level: {level}</p>

      {level >= 90 && <span>⭐</span>}
    </div>
  )
}

export default SkillBadge