import React from 'react'

const Contact = () => {
  return (
    <div>
    <form>
    <div><label>Name:</label><br />
        <input type="text" name="name" />
    </div>
    <br />
    <div><label>Email:</label><br />
        <input type="email" name="email" />
    </div>
    <br />
    <div><label>Message:</label><br />
        <textarea name="message" ></textarea>
    </div>
    <br />
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Contact