import React, { useState } from 'react'

const Comment =({ postAuthor ,comment }) => {
    const [showChildren, setShowChildren] = useState(true);
    const nestedComments = (comment.children || []).map(comment => {
        return <Comment key={comment.id} postAuthor={postAuthor} comment={comment} type="child" />
    })
    return (
       
        <div style={{ "marginLeft": "45px", marginBottom: '10px' }}>
            <div style={{ display: 'inline', fontWeight: 'bold', fontSize: 'large' }} onClick={() => setShowChildren(!showChildren)}> {showChildren ? '-' : '+'}
                <span style={{ fontWeight: 'bold' }}>{comment.author}</span> 
            </div>
           
            {showChildren &&
                <div style={{ "marginTop": "2px", borderLeft: '2px solid #cadbce', marginLeft: '4px', position: 'relative' }}>
                    <div style={{ width: '15px', float: 'left', position: 'absolute', top: '0', bottom: '0' }} onClick={() => { setShowChildren(!showChildren) }} />
                    <div className="commentDiv" dangerouslySetInnerHTML={{ __html: comment.text }} />
                    {nestedComments}
                </div>
            }
        </div>
    )
}

export default Comment