import PropTypes         from 'prop-types';
import React             from 'react';
import { CSSTransition } from 'react-transition-group';
import FullScreenDialog  from '../../Elements/full_screen_dialog.jsx';

const ContractTypeDialog = ({
    children,
    is_mobile,
    open,
    onClose,
}) => (
    is_mobile ?
        <React.Fragment>
            <span className='contract-type-widget__select-arrow' />
            <FullScreenDialog
                title='Select Trading Type'
                visible={open}
                onClose={onClose}
            >
                {children}
            </FullScreenDialog>
        </React.Fragment>
        :
        <CSSTransition
            in={open}
            timeout={100}
            classNames='contracts-type-dialog'
            unmountOnExit
        >
            <div className='contracts-type-dialog'>
                <div className='contracts-type-dialog__list-container'>
                    {children}
                </div>
            </div>
        </CSSTransition>
);

ContractTypeDialog.propTypes = {
    children : PropTypes.element,
    is_mobile: PropTypes.bool,
    onClose  : PropTypes.func,
    open     : PropTypes.bool,
};

export default ContractTypeDialog;
