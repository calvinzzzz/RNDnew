import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import * as THREE from 'three'
import styles from './Welcome.less';
import STLViewer from 'stl-viewer';

export default (): React.ReactNode => {
    const intl = useIntl();
    return (
        <PageContainer>
            <Card>
                <Alert
                    message="coming soon"
                    type="warning"
                    showIcon
                    banner
                    style={{
                        margin: -12,
                        marginBottom: 24,
                    }}
                />
            </Card>
        </PageContainer>
    );
};
