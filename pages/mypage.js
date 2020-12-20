import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../counter'
import { connect } from 'react-redux'

const mapDispatch = { increment }

function MyPage() {
  const dispatch = useDispatch()
  const counter = useSelector(
    state => state.counter
  )
  const router = useRouter();

  return (
    <div>
      <h1>MyPage</h1>
      <button onClick={() => router.push("/login")}>go to login</button>
      <button onClick={() => dispatch(increment())}>redux test</button>
    </div>
  );
}

export default connect(
  null,
  mapDispatch
)(MyPage)
