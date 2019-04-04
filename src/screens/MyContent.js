import React from 'react';
import {SegmentedControlIOS, StyleSheet, Text, View} from 'react-native';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../redux/actions";

import MyTemplates from "./MyTemplates";
import MyGames from "./MyGames";

class MyContent extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <SegmentedControlIOS
                        values={['Templates', 'Games']}
                        selectedIndex={this.state.selectedIndex}
                        onChange={(event) => {
                            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                        }}
                    />
                </View>
                {
                    this.state.selectedIndex === 0 &&
                    <MyTemplates/>
                }
                {
                    this.state.selectedIndex === 1 &&
                    <MyGames/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED',
        flex: 1,
    },
    header: {
        padding: 10,
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
    return {
        templates: state.templatesReducer.templates
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyContent);