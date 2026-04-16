const ComputersCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 flex items-center justify-end pr-10 pointer-events-none">
      <div style={{
        width: '280px',
        height: '280px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Outer ring */}
        <div style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          border: '1px solid rgba(145,94,255,0.3)',
          animation: 'spin 12s linear infinite',
        }} />
        {/* Middle ring */}
        <div style={{
          position: 'absolute',
          width: '190px',
          height: '190px',
          borderRadius: '50%',
          border: '1px solid rgba(145,94,255,0.5)',
          animation: 'spin 8s linear infinite reverse',
        }} />
        {/* Inner ring */}
        <div style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '2px solid rgba(145,94,255,0.8)',
          animation: 'spin 5s linear infinite',
        }} />
        {/* Center dot */}
        <div style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: '#915eff',
          boxShadow: '0 0 20px rgba(145,94,255,0.8)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        {/* Orbit dot outer */}
        <div style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          animation: 'spin 12s linear infinite',
        }}>
          <div style={{
            position: 'absolute',
            top: '-6px',
            left: '50%',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#915eff',
            boxShadow: '0 0 10px rgba(145,94,255,0.9)',
            transform: 'translateX(-50%)',
          }} />
        </div>
        {/* Orbit dot middle */}
        <div style={{
          position: 'absolute',
          width: '190px',
          height: '190px',
          borderRadius: '50%',
          animation: 'spin 8s linear infinite reverse',
        }}>
          <div style={{
            position: 'absolute',
            top: '-5px',
            left: '50%',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#aaa6c3',
            boxShadow: '0 0 8px rgba(170,166,195,0.9)',
            transform: 'translateX(-50%)',
          }} />
        </div>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default ComputersCanvas;
