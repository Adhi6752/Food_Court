const shimmer =  
    (
<div className="list">
           {
            Array(30).fill("").map((e) => {
                return <div className="shimmer-card"></div>
            })
            
            }
    </div>
    );

export default shimmer;