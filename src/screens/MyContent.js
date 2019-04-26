import React from 'react';
import {StyleSheet, View} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../redux/actions";

import MyTemplates from "./MyTemplates";
import MyGames from "./MyGames";

class MyContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <SegmentedControlTab
                        values={['Templates', 'Games']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={(index) => {
                            this.setState({selectedIndex: index});
                        }}
                    />
                </View>
                {
                    this.state.selectedIndex === 0 &&
                    <MyTemplates navigation={this.props.navigation}/>
                }
                {
                    this.state.selectedIndex === 1 &&
                    <MyGames navigation={this.props.navigation}/>
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