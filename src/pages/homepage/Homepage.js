import Directory from '../../components/directory/Directory'
import styled from 'styled-components' //https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15185736#notes

const HomepageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`

//not styled the same for some reason
const Homepage = ({ history }) => {
  return (
    <HomepageStyle>
      <Directory history={history} />
    </HomepageStyle>
  )
}

export default Homepage
