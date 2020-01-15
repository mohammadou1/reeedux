import Translate from "~/components/shared/translate";
import MetaHead from "~/components/shared/meta";
import { useLocale } from "~/locales";
import { PUBLIC_URL } from "~/env";
import { useRouter } from 'next/router';
import { useEffect, Fragment } from "react";
import { logPageView } from "~/helpers/analytics";
import { Container, Button } from "reactstrap";
import { bindActionCreators } from 'redux';
import { fetchUsersMore, fetchUsers } from '~/stores/actions/usersActions';
import { connect } from 'react-redux';

const Index = (props) => {
    const { translate } = useLocale();
    const router = useRouter();
    useEffect(() => {
        logPageView();
    }, []);
    return (<Fragment>
        <MetaHead title={translate({ key: 'home' })}
            description={translate({ key: 'home meta description' })}
            robots="index, follow"
            ogUrl={PUBLIC_URL + router.asPath}
            keywords={translate({ key: 'home meta keywords' })}
            ogDescription={translate({ key: 'home og description' })}
            ogTitle={translate({ key: 'home' })} />

        <Container>
            <h1 className="text-center py-3">
                <Translate id="home" wrapperComponent={Fragment} />
            </h1>
            <ul>
                {props.users.map((user, idx) => <li key={idx}>{user.name}</li>)}

            </ul>
            <Button onClick={() => props.fetchUsers()}>
                Add More
            </Button>
        </Container>
    </Fragment>)
}


Index.getInitialProps = async ({ store, isServer }) => {
    await store.dispatch(fetchUsers());
    return {
        isServer
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: bindActionCreators(fetchUsersMore, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);