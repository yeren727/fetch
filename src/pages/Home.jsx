import { Link} from "react-router-dom";
function Home() {
    return <div>
        <Link to="/posts">Posts</Link>
        <br />
        <Link to="/create/post">Create post</Link>
    </div>
}
export default Home;