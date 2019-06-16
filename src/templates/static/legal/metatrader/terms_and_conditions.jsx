import React from 'react';
import BIEL from './biel.jsx';

const Li = ({
    dataShow,
    title,
    subtitle,
    sub_list,
    paragraph,
    children,
}) => (
    <li data-show={dataShow}><strong>{title}</strong> {subtitle && <span>&mdash; {subtitle}</span>}
        {sub_list && <ol>{sub_list.map(list => <li key={list}>{list}</li>)}</ol>}
        {paragraph && <p>{paragraph}</p>}
        {children}
    </li>
);

const TermsAndConditions = () => (
    <div id='mt-tnc'>
        <h2 data-anchor='introduction-and-scope-of-agreement'>{it.L('A. Introduction and scope of agreement')}</h2>
        <ol>
            <li>
                {it.L('Depending on the jurisdiction to which a client\'s account has been attached in accordance with the account opening procedures of the website, the terms \'the Company\' and \'[_1]\' shall denote either', it.website_name)}&nbsp;
                <span data-show='-eucountry'>{it.L('Binary (V) Ltd,')}&nbsp;</span>
                <span data-show='-eucountry'>{it.L('Binary (SVG) Ltd,')}&nbsp;</span>
                <span data-show='-eucountry'>{it.L('Binary (BVI) Ltd,')}&nbsp;</span>
                <span data-show='-eucountry'>{it.L('Binary (FX) Ltd,')}&nbsp;</span>
                <span>{it.L('Binary (Europe) Ltd, or')}&nbsp;</span>
                <span>{it.L('Binary (IOM) Ltd, or')}&nbsp;</span>
                <span>{it.L('Binary Investments (Europe) Ltd.')}</span>
            </li>

            <li data-show='eucountry default'>{it.L('The client understands that products based on a random number generator (the "Volatility Indices") are gaming products whereas products based on financial market indices (forex, indices, and commodities) are financial instruments.')}</li>
            <li>{it.L('All products traded on Margin carry a high degree of risk and can result in losses that exceed the client\'s initial deposit. The Margin trading services described in this agreement are not suitable for everyone. The client acknowledges that the Margin trading services described in this agreement are designed for the clients who are knowledgeable and experienced in the types of transactions described in this agreement, and the client fully understands the associated risks before entering into this agreement with the Company.')}</li>
            <li>{it.L('The client should not sign up to receive the Margin trading services described in this agreement without understanding their nature and the associated risks.')}</li>
            <li>{it.L('This agreement is supplied to the client in English. In the event that there is a difference between the English version and any translated versions of this document, the English version shall prevail.')}</li>
            <li>{it.L('A glossary of the capitalised terms can be found in paragraph R, entitled "Interpretation of terms".')}</li>
        </ol>

        <h2 data-anchor='commencement'>{it.L('B. Commencement')}</h2>
        <ol>
            <li>{it.L('This agreement will commence on the date that the client receives their MT5 Real Account number and, for any new versions thereafter, on the date the new versions are published on the Company\'s website.')}</li>
        </ol>

        <h2 data-anchor='provision-of-services'>{it.L('C. Provision of services')}</h2>
        <ol>
            <li>{it.L('The Company mainly provides contracts for difference (CFDs) via MT5 platform.')}</li>
            <li>{it.L('The provision of the Margin trading services described in this agreement utilises a third-party system, acquired via a non-exclusive, non-transferable, non-sublicensable, and terminable licence from the third-party system provider/licensor (the "MT5 trading platform"). The client acknowledges that the Company reserves the right to change the third-party system provider/licensor during the course of providing the Margin trading services described in this agreement to the client.')}</li>
            <li>{it.L('[_1] shall act purely on an execution-only basis.', it.website_name)}</li>
            <li>{it.L('[_1] shall also act at times as a principal and at other times as an agent on the client\'s behalf for all transactions entered into by the client, depending on the company that the client has opened their account with.', it.website_name)}</li>
            <li>{it.L('The Company will hold the client responsible for all their obligations under this agreement in the Company\'s course of providing the Margin trading services that are described in this agreement to the client even if the client notifies the Company that they are acting as the agent of an identified principal.')}</li>
        </ol>

        <h2 data-anchor='account-management'>{it.L('D. Account management')}</h2>
        <ol>
            <li>{it.L('Opening an account')}
                <ol>
                    <li>{it.L('[_1] offers a variety of MT5 Real Accounts depending on the jurisdiction to which a client’s [_1] account has been attached subject to any verification or authentication requirements.', it.website_name)}</li>
                    <li>{it.L('By opening an MT5 Real Account with [_1], the client represents, warrants, and undertakes the following:', it.website_name)}
                        <ol>
                            <li>{it.L('The client is acting for their sole benefit, and not for or on behalf of any other person.')}</li>
                            <li>{it.L('The client has read these terms and conditions in full and has understood that they will be buying and selling financial contracts subject to these terms and conditions.')}</li>
                            <li>{it.L('The client has sufficient experience and knowledge about contracts for difference to be capable of evaluating the merits and risks of acquiring contracts via this site and have done so without relying on any information contained in this site.')}</li>
                        </ol>
                    </li>
                    <li>{it.L('The Company reserves the right to refuse the client\'s request to open an MT5 Real Account for any reason, and any MT5 Real Account may be closed at the Company\'s discretion at any time.')}</li>
                </ol>
            </li>
            <li data-show='eucountry' >{it.L('Assessment of appropriateness')}
                <ol>
                    <li>{it.L('In the course of providing services, the Company may, where applicable, conduct an appropriateness test, in accordance with the Company\'s regulatory obligations, in order to determine whether the client, in the Company\'s view and on the basis of the information provided by the client, possesses the necessary knowledge and experience in the investment field to understand the risks involved in the specific type of product or service offered or demanded.')}</li>
                    <li>{it.L('If the Company considers, on the basis of the information provided by the client, that the client does not possess the knowledge and experience to appreciate the risks associated with an investment in the proposed instrument, the Company will issue a warning to the client. Such a warning shall be displayed on the website.')}</li>
                    <li>{it.L('In accordance with applicable regulatory requirements, if the Company does not manage to obtain sufficient information to assess the appropriateness of the product or service for the client, the Company will similarly inform the client that [_1] is not in a position to assess appropriateness.', it.website_name)}</li>
                </ol>
            </li>
            <li>{it.L('Fund transfers')}
                <ol>
                    <li>{it.L('Funding of MT5 Real Account')}
                        <ol>
                            <li>{it.L('The client\'s MT5 Real Account shall be funded by transferring funds from their [_1] account, subject to the availability and sufficiency of funds in their [_1] account and any daily transfer limits. No fund transfers shall be made to any other account in the name of any third party.', it.website_name)}</li>
                            <li>{it.L('All fund transfers from the client\'s [_1] account to their MT5 Real Account must be made by the client.', it.website_name)}</li>
                            <li>{it.L('There will be no charges for fund transfers from the client\'s [_1] account to their MT5 Real Account in the same currency. Should the client\'s [_1] account and MT5 Real Account be in different currencies, the Company reserves the right to charge a currency conversion fee.', it.website_name)}</li>
                        </ol>
                    </li>
                    <li>{it.L('Withdrawal of funds from MT5 Real Account')}
                        <ol>
                            <li>{it.L('Subject to the availability and sufficiency of funds in their MT5 Real Account and any daily transfer limits, the client may withdraw funds from their MT5 Real Account to their [_1] account.', it.website_name)}</li>
                            <li>{it.L('The Company may, however, withhold the client\'s withdrawal request from their MT5 Real Account to their [_1] account, in whole or in part, in one or more of the following cases:', it.website_name)}
                                <ol>
                                    <li>{it.L('The client has unrealised losses on their MT5 Real Account.')}</li>
                                    <li>{it.L('Such a withdrawal would result in the client\'s Account Equity being less than zero.')}</li>
                                    <li>{it.L('The Company reasonably considers that funds may be required to meet any Margin Requirement.')}</li>
                                    <li>{it.L('There is an amount outstanding from the client to the Company.')}</li>
                                    <li>{it.L('The Company is required to do so in accordance with any relevant law or regulation.')}</li>
                                </ol>
                            </li>
                            <li>{it.L('Withdrawal of funds from the client\'s MT5 Real Account can be made in a different currency from the one maintained in the client\'s [_1] account subject to a currency transfer fee charge.', it.website_name)}</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>{it.L('Accounts with debit balance (i.e. credit exposure to [_1])', it.website_name)}
                <ol>
                    <li>{it.L('The Company does not offer credit to its clients. The client acknowledges and agrees that they will not be dealing with the Company on credit.')}</li>
                    <li>{it.L('Accounts with debit balances are required to settle the full amount immediately by making a payment to [_1].', it.website_name)}</li>
                    <li>{it.L('If the client fails to immediately make a full settlement of the sum due to the Company in accordance with this agreement, the Company reserves the right to accrue interest on the sums due from the client to the Company in respect of any transaction that the client fails to pay on the relevant due date. Interest will accrue on a daily basis from the relevant due date until the date on which payment is received in full at the bank\'s official base rate for short term funds determined by the Company and will be payable on demand.')}</li>
                </ol>
            </li>
            <li data-show='eucountry'>{it.L('Self-exclusion limits')}
                <ol>
                    <li>{it.L('When a self-exclusion limit is set on the client\'s [_1] account, the client\'s MT5 Real Account will be disabled until the self-exclusion limit on their [_1] account is removed.', it.website_name)}</li>
                    <li> {it.L('Due to the responsibilities under responsible gaming, the Company reserves the right to assess and safeguard the client\'s account by setting limits to the client\'s activity as deemed proportionate and necessary for their protection.')}</li>
                    <li>{it.L('In relation to 5.2, the Company also reserves the right to exclude the client definitely or indefinitely, based on the Company\'s client assessment.')}</li>
                </ol>
            </li>
            <li>{it.L('Account security')}
                <ol>
                    <li>{it.L('By adhering to the following measures, the Company is committed to making sure that the client\'s personal data and transactions are secure:')}
                        <ol>
                            <li>{it.L('The client\'s MT5 Real Account password and login ID are unique, and passwords are hashed so that not even [_1] staff can read them. This is the reason why the Company cannot retrieve the client\'s password and has to send a link for setting a new password to the client\'s email if they cannot recall their password.', it.website_name)}</li>
                            <li>{it.L('It is the client\'s responsibility to keep their password and login ID confidential. The client agrees not to disclose their password and login ID to any other person.')}</li>
                            <li>{it.L('The Company\'s information security policies are based on industry best practices in access control and business continuity.')}</li>
                            <li>{it.L('The Company uses identity verification services and real-time fraud detection measures to help protect the client from unauthorised access to their account. The Company also monitors account activity for signs of unusual activity that might indicate fraud and works with collection agencies and law-enforcement agencies to address fraud issues.')}</li>
                            <li>{it.L('The Company will rely on the transactions and other instructions entered into and/or given by the client\'s username and password, and the client is bound by any transaction or expense incurred in reliance on such Orders and/or instructions.')}</li>
                            <li>{it.L('The client is to immediately notify the Company if they become aware of the loss, theft, or disclosure to third parties of their login details.')}</li>
                            <li>{it.L('If the Company believes that unauthorised persons are using an account, it reserves the right to suspend the client\'s right to use the trading facility without prior notice.')}</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>{it.L('Closing an account')}
                <ol>
                    <li>{it.L('If the client wishes to withdraw funds from their MT5 Real Account and close their MT5 Real Account, they may notify the Company by contacting [_1] helpdesk [_2]. The client\'s MT5 Real Account may be closed if they do not have any Open Positions and all the amounts that were due to the Company have been settled.', it.website_name, '<a href=\'mailto:support@binary.com\'>support@binary.com</a>')}</li>
                    <li>{it.L('If the client\'s [_1] account is closed, their MT5 Real Account will be automatically closed as well.', it.website_name)}</li>
                </ol>
            </li>
        </ol>

        <h2 data-anchor='orders'>{it.L('E. Orders')}</h2>
        <ol>
            <li>{it.L('Order execution/cancellation/modification')}
                <ol>
                    <li>{it.L('The client acknowledges that it is their responsibility to understand the features, characteristics, terms, and conditions of an Order and the implications of executing an Order before they place an Order with the Company.')}</li>
                    <li>{it.L('Subject to network latency, the Company endeavours to execute the client\'s Order within a reasonable time from the time that they trigger the Order, at the price nearest to the client\'s specified price. The Company does not guarantee that a transaction will be opened/closed following an Order being triggered by the client at their specified price. This can happen under certain trading conditions when there are sharp price movements in the market. In that case, the Company has the right to execute the Order at the first available price.')}</li>
                    <li>{it.L('The Company endeavours to open or close the transaction to which the client\'s Order relates at a price reasonably available to the Company, acting in accordance with the Company\'s duty of best execution. Best execution means that, when executing Orders, the Company must take all sufficient steps to obtain the best possible result for the client, taking into account the price, costs, speed, likelihood of execution and settlement, size, nature, or any other consideration relevant to the execution of the Order.')}</li>
                    <li>{it.L('The Company Prices are determined by reference to the price of the Underlying Instrument which is quoted on external exchanges or dealing facilities that [_1] selects at the Company\'s discretion. The Company\'s IT infrastructure and price aggregator system facilitate the reception of quotes from shortlisted prime brokers, who act as liquidity providers for the Company and the delivery of the quotes, derived with reference against relevant benchmark and markets, to the client. The client acknowledges that the Company Prices may differ from the Bid and Ask Prices made available by external exchanges or dealing facilities and the Company is not liable for any losses that the client might incur arising from such differences. This clause does not apply to Volatility Indices.', it.website_name)}</li>
                </ol>
            </li>
        </ol>
        <h2 data-anchor='types-of-orders'>{it.L('Types of Orders')}</h2>
        <ol>
            <li><h4>{it.L('Market Orders')}</h4>
                <p>{it.L('A Market Order is an Order to buy or sell at the available market price, which results from the aggregation of prices and volumes received from third-party liquidity providers.')}</p>
            </li>
            <li><h4>{it.L('Pending Orders')}</h4>
                <p>{it.L('A Pending Order is the trader\'s instruction to a brokerage company to buy or sell a security in future, under pre-defined conditions, when price reaches a specific level.')}</p>
                <ol>
                    <li>{it.L('The Company may, at its absolute discretion, accept a Stop Order, a Limit Order, or a Stop Limit Order from the client.')}</li>
                    <li>{it.L('The client may specify their instruction of a Stop Order or apply for a Limit Order for a limited duration or for an indefinite period (a "good till cancelled" or "GTC" Order).')}</li>
                    <li>{it.L('In the case of a Stop Order, the client acknowledges that the Company will endeavour to fill the order at a price equal to the one that the client has specified. However, if the specified price is unavailable, a less favourable price may be quoted. In other words, the Order is executed either at the price equal to the specified one or worse than that (slippage). The execution of Stop Orders is guaranteed.')}</li>
                    <li>{it.L('In the case of a Limit Order, the client acknowledges that the Company will endeavour to fill the Order at a level that is the same or better than the Limit the client has specified, subject to the availability of the Limit Price.')}</li>
                    <li>{it.L('The client may specify their instruction of a Stop Order or apply for a Limit Order for a limited duration or for an indefinite period (a "good till cancelled" or "GTC" Order).')}
                        <ol>
                            <li>{it.L('In the case of a Stop Order, the client acknowledges that the Company will endeavour to fill the Order at a price equal to the one that the client has specified. However, if the specified price is unavailable, a less favourable price may be quoted. In other words, the Order is executed either at the price equal to the specified one or worse than that (slippage). The execution of Stop Orders is guaranteed.')}</li>
                            <li>{it.L('In the case of a Limit Order, the client acknowledges that the Company will endeavour to fill the Order at a level that is the same or better than the Limit the client has specified, subject to the availability of the Limit Price.')}</li>
                        </ol>
                    </li>
                    <li>{it.L('Stop Limit Orders are a combination of Stop and Limit Orders. If the price reaches (or passes) the Stop Price, a Limit Order is placed at the specified price, which will be filled at a price equal or better than the specified price. ')}</li>
                    <li>{it.L('A Take Profit Order is intended for gaining profit when the financial instrument price has reached a certain level. Execution of this Order results in the complete closing of the whole position. It is always connected to an Open Position or a Pending Order.')}</li>
                    <li>{it.L('A Stop Loss Order is intended for minimising losses when the financial instrument price moves in an unprofitable direction. The execution of this Order results in the complete closing of the whole position. It is always connected to an Open Position or a Pending Order.')}</li>
                    <li>{it.L('The client may not cancel or amend the level of their Stop and Limit Order once the level has been reached.')}</li>
                    <li>{it.L('The client acknowledges that it is their responsibility to cancel the Stop or Limit Order if they do not want the Stop or Limit Order to remain valid. If the client fails to cancel the Stop or Limit Order, the Company shall be entitled, at its absolute discretion, to treat the Stop or Limit Order as an instruction to enter into a new transaction for the client if and when the Company quote reaches or goes beyond the level of the Stop or Limit Order.')}</li>
                    <li>{it.L('The client acknowledges that the Company reserves the right to establish a minimum and maximum transaction size, as well as a total net position size, which may be subject to alteration, and that the Company will only execute Orders that fall within the range of the minimum and maximum transaction sizes.')}</li>
                    <li>{it.L('The Company may, at its absolute discretion, disregard the client\'s Order if an Event takes place resulting in it no longer being practicable to act on the client\'s Order after indicating an acceptance of their Order.')}</li>
                </ol>
            </li>
        </ol>
        <h2 data-anchor='margin'>{it.L('F. Margin and Leverage')}</h2>
        <ol>
            <li>{it.L('General provisions')}
                <p>{it.L('The Margin used in Margin calculations will be whichever is bigger: the Margin implied by the account\'s Leverage or the symbol\'s Margin. The account has a specific Margin, but symbol\'s Margin may vary. ')}</p>
                <ol>
                    <li>{it.L('Prior to placing an Order, which results in opening a position, the client acknowledges that it is their responsibility to ensure that their Account Free Margin is sufficient to cover the Margin required in relation to the opening of the position (the "Margin Requirement"), and to continuously meet the Margin Requirement.')}</li>
                    <li>{it.L('To maintain Open Positions, the client is required to have sufficient Account Equity to cover any Margin Requirement. If a client\'s Margin Level is less than the Margin Level set for their account, the client has entered into a Margin Call and is required to increase their Margin Level above the account\'s specified level in order to avoid a Stop Out to occur. The client may not be able to place an Order to open a transaction unless there is sufficient Account Equity to cover the Total Margin.')}</li>
                    <li>{it.L('The client acknowledges that it is their responsibility to monitor their Account Balance and Margin Requirement, and the Company is not under any obligation to keep the client informed (i.e. to make a Margin Call).')}</li>
                </ol>
            </li>
            <li>{it.L('Margin Requirement and calculation')}
                <p>
                    <ol>
                        <li>{it.L('Margin Requirement is the amount that the client needs to have in their account prior to entering into a trade and it is a percentage of the value of that trade. Margin Requirement will continue to increase/decrease in accordance with the volume and direction of the Open Positions.')}</li>
                        <li>{it.L('The Company may modify Margin Requirements for any Open Positions or new Orders at its sole discretion. Formulas for Margin Requirements published on the website are indicative only and may be changed by the Company at its discretion at any time, due to changing market conditions or other factors.')}</li>
                        <li>{it.L('Whilst the Company endeavours to close out the client\'s Open Positions if and when the Margin Level for their MT5 Real Account reaches or falls below the Stop Out Level, the company does not guarantee that the client\'s Open Positions will be closed when the Margin Level for their MT5 Real Account reaches the Stop Out Level.')}</li>
                        <li>{it.L('For fully covered accounts, no Margin will be charged on open positions. However, swaps and other applicable fees can cause the client\'s Account Equity to turn negative. In that case, the Stop Out process will be triggered.')}</li>
                        <li>{it.L('The Company reserves the right to charge the Margin per each hedged lot of a position.')}</li>
                    </ol>
                </p>
            </li>
            <li>{it.L('Stop Out Level')}
                <ol>
                    <li>{it.L('If the Margin Level for the client\'s MT5 Real Account reaches or falls below the Stop Out Level, this will be classified as an Event of Default. In such circumstances, Open Positions are automatically closed in the following order: (i) the server analyses those Orders that are not under execution at the moment; (ii) the server deletes Orders with the largest Margin; (iii) if the client\'s Margin Level is still under the Stop Out Level, the next Order is deleted (Orders without Margin Requirements are not deleted); (iv) if the client\'s Margin Level is still under the Stop Out Level, the server closes a position with the largest loss; (v) Open Positions are closed until the client\'s Margin Level becomes higher than the Stop Out Level. Additionally, for fully hedged positions, Stop Out will be performed on accounts having Open Positions, zero Margin (positions are covered), and negative equity.')}</li>
                    <li>{it.L('The default Stop Out Level applicable to the client\'s account is published on the Company website. However, the default Stop Out Level is subject to alteration at the Company\'s absolute discretion. Any changes to the Stop Out Level will take effect immediately. The Company will endeavour to notify the client of an alteration to the default Stop Out Level by publishing the revised default Stop Out Level on the Company website. It is the client\'s responsibility to check the Company website regularly and remain informed about the default Stop Out Level.')}</li>
                    <li>{it.L('The Stop Out Level applicable to the client\'s MT5 Real Account may differ from the default Stop Out Level published on the Company website.')}</li>
                </ol>
            </li>
            <li>
                {it.L('Negative Balance Protection')}
                <p>{it.L('The Company has a Stop Out policy which prevents the client from losing more than they have deposited. However, in the event that the client\'s Open Positions are not closed when the Margin Level for their MT5 Real Account reaches the Stop Out Level, the Company, at its sole discretion, may waive the client\'s negative balance by crediting their account if their Account Balance goes into a negative balance. The negative balance is determined by aggregating all the negative balances incurred over a 24-hour period across all accounts held by the client. The client acknowledges that, unless they are a retail customer of Binary Investments (Europe) Ltd or a client of Binary (Europe) Ltd or Binary (IOM) Ltd, the offer of the negative balance protection by the Company to the client is at the Company\'s sole discretion and the Company reserves the right to change the features and eligibility criteria of the negative balance protection at any time. The provisions of the negative balance protection do not apply in the following situations:')}
                    <ol>
                        <li>{it.L('When a force majeure event occurs')}</li>
                        <li>{it.L('When the market conditions or market movements/volatility are abnormal')}</li>
                        <li>{it.L('When the client opens any transactions in relation to Prohibited Trades')}</li>
                        <li>{it.L('When the client is a professional client')}</li>
                        <li>{it.L('Where the negative balance is connected to or a result of functional limitations and/or malfunction of the MT5 trading platform')}</li>
                        <li>{it.L('When a negative balance results from the breach of any of the terms of this agreement by the client')}</li>
                    </ol>
                </p>
            </li>
            <li>{it.L('Transfer of funds')}
                <ol>
                    <li>{it.L('The client may make Margin Payments by transferring funds from their [_1] account to their MT5 Real Account. In the event that there are insufficient funds in the client\'s [_1] account to fund their MT5 Real Account, they may make Margin Payments by funding their [_1] account and transferring the funds from their [_1] account to their MT5 Real Account.', it.website_name)}</li>
                    <li>{it.L('Margin Payments are due immediately and shall be received in full by the Company.')}</li>
                </ol>
            </li>
        </ol>

        <h2 data-anchor='regulatory-provisions'>{it.L('G. Regulatory provisions')}</h2>
        <ol>
            <li>{it.L('Potential conflicts of interest')}
                <ol>
                    <li>{it.L('The Margin trading services described in this agreement are conducted over the counter ("OTC"). ')}</li>
                    <li>{it.L('The client acknowledges that the Company will determine, at its discretion, the transactions that will be kept in the Company\'s own book (known as B booking) and the transactions that will be passed through to the prime brokers who act as liquidity providers for the Company (known as A booking). For the former, the Company is the counterparty in these transactions, and a correlation exists between the profit/loss made by the client and the profit/loss made by the Company. At any point in time, the Company may be entering into or may have entered into transactions with a large number of clients, each of whose interests may diverge from those of other clients. As such, the Company may be holding Open Positions that may not be aligned with the client\'s objectives/interests as an individual client of the Company.')}</li>
                    <li>{it.L('Whilst the Company endeavours to take all reasonable and sufficient steps, as required by applicable laws and regulations, to identify potential conflicts of interests between the Company and its clients, or between one client and another, that arise in the course of providing the Margin trading services as described in this agreement by establishing and implementing policies and procedures, it is possible that the Company may execute certain Orders which may have other direct or indirect material interests.')}</li>
                    <li>{it.L('Given the Company\'s role as a Margin trading service provider as described in this agreement, the Company seeks to avoid undue market influence to the extent consistent with the client\'s trading needs and the Company\'s risk management policies and procedures. By continuing to use the Margin trading services described in this agreement, the client acknowledges that they are aware of the potential conflict of interest disclosed that may arise and cannot be completely eliminated, and they consent to the Company acting notwithstanding such potential conflict of interests.')}</li>
                </ol>
            </li>
            <li>{it.L('Client money')}
                <ol>
                    <li>{it.L('The money collected from clients is not invested in any securities, futures, or other investments on behalf of clients.')}</li>
                    <li>{it.L('The Company holds customer funds in bank accounts separate from the operational accounts, and arrangements have been made to ensure that the assets in the customer accounts will be distributed to the customers in the event of insolvency.')}</li>
                </ol>
            </li>
        </ol>

        <h2 data-anchor='quotes'>{it.L('H. Quotes')}</h2>
        <ol>
            <li>{it.L('Quote provision')}
                <ol>
                    <li>{it.L('A higher price (Ask), at which a client can buy, and a lower price (Bid), at which a client can sell, are quoted for each financial instrument, and they are referred to as Company Prices. The difference between the Bid and Ask Prices is called the Spread.')}</li>
                    <li>{it.L('The Spread is subject to alteration, at the Company\'s absolute discretion. The client acknowledges that whilst the Company endeavours to maintain a competitive Spread, it may widen significantly in some circumstances, and such figures will be determined by the Company at its reasonable discretion. Spreads may be widened at the daily bank rollovers.')}</li>
                    <li>{it.L('All prices for financial instruments quoted on the Company website are real market prices and are hereby regarded as firm prices. Any slippage from the shown price during the execution of the Order is considered as consequential. Slippage may increase significantly at the daily bank rollovers. The client acknowledges that, by accepting this agreement, no frivolous quote is being offered to the client by the Company.')}</li>
                </ol>
            </li>
        </ol>

        <h2 data-anchor='trading-transactions'>{it.L('I. Trading')}</h2>
        <ol>
            <li>{it.L('Opening a trade')}
                <ol>
                    <li>{it.L('A trade is opened by either executing a "Buy" or a "Sell" Order based on a specified number of lots (volume) that constitute the Underlying Instrument of the relevant market.')}</li>
                    <li>{it.L('Any trade opened by the client must be within the available balance or limits in effect with respect to MT5 Real Account or any transactions.')}</li>
                </ol>
            </li>
            <li>{it.L('Closing a trade')}
                <ol>
                    <li>{it.L('General provisions')}
                        <ol>
                            <li>{it.L('In order to profit from trading rate, it is necessary to close the position. To close a position, a trade operation opposite to the first one is executed.')}</li>
                            <li>{it.L('An Open Position may be closed by clicking the button "x".')}</li>
                            <li>{it.L('An Open Position may be partially closed by double clicking the position, selecting the volume to be partially closed from the context menu, and then clicking "Close".')}</li>
                            <li>{it.L('Upon closing a trade, the realised profit (or loss), which is represented by the difference between the opening level and closing level of the trade multiplied by the number of lots (volume), becomes due and payable by the Company to the client (or due and payable by the client to the Company in cases of realised loss).')}</li>
                        </ol>
                    </li>
                    <li>{it.L('Trading rules')}
                        <ol>
                            <li>{it.L('The client acknowledges and accepts that a trade may be subject to market rules laid down in by-laws, rules, provisions, customs, and practices of an exchange, a market, a clearing house, a body, or any other organisation involved in the execution, clearing, and/or settlement of the said trade. Should any such organisation take decisions or measures which affect a trade or an Open Position, the Company shall be entitled to take any action (including closing any Open Position of the client) that it, at its sole discretion, considers reasonable. ')}</li>
                            <li>{it.L('The client acknowledges and agrees that the Company may, at any time without prior notice and at its discretion, change the trading rules in relation to the following:')}
                                <ol>
                                    <li>{it.L('Non-trading hours (e.g. the hours over the weekend during which trading of certain transactions are not possible)')}</li>
                                    <li>{it.L('The minimum, incremental, and maximum Order amount')}</li>
                                    <li>{it.L('Margin Requirement')}</li>
                                    <li>{it.L('The instruments available on the electronic trading platform (including their availability for trading)')}</li>
                                    <li>{it.L('The cut-off time for performing Roll-overs and any long or short position swap charges')}</li>
                                </ol>
                            </li>
                            <li>{it.L('Parts of this clause may not apply to Volatility Indices.')}</li>
                        </ol>
                    </li>
                </ol>
            </li>
        </ol>

        <h2 data-anchor='electronic-trading-platform-and-transactions'>{it.L('J. Electronic trading platform and transactions')}</h2>
        <ol>
            <li>{it.L('All intellectual property rights in the MT5 trading platform are owned by the licensor and shall remain the exclusive property of the licensor. Nothing in this agreement intends to transfer any such rights or to vest any such rights in the client.')}</li>
            <li>{it.L('The client\'s use of the MT5 trading platform, whether accessed through or downloaded from the Company website or a third-party website, is governed by the terms of use provided by the MT5 trading platform licensor to the client. In the event of any conflict between the content of this agreement and the agreement between the client and the MT5 trading platform licensor, the terms of this agreement shall prevail. It is the client\'s responsibility to ensure that the information technology that they use is compatible with the required information technology to support the MT5 trading platform.')}</li>
            <li>{it.L('The client acknowledges, understands, represents, and warrants that they are aware of the functional limitations of the MT5 trading platform (for example Wine, which is not a fully stable application, as disclosed by the MT5 trading platform licensor on their website).')}</li>
            <li>{it.L('The Company will act on any instructions given, or appearing to be given, by the client and received by the Company in relation to the Margin trading services provided through the MT5 trading platform, as deemed instructed by the client. However, it is not the Company\'s obligation to act on any instructions deemed given by the client, and the Company is not obligated to give the client any reasons for declining to do so. Instructions received by the Company from the client are deemed final and will not be revocable. It is the client\'s responsibility to ensure the genuineness and accuracy of the instructions given by them to the Company.')}</li>
            <li>{it.L('The Company will use reasonable endeavours within its control to ensure that all electronic data provided on the MT5 trading platform and all electronic transactions instructed by the client and accepted and executed by the Company are not subject to network latency.')}</li>
            <li>{it.L('The client hereby agrees that they will not participate in any illegal, deceptive, misleading, or unethical practices including, but not limited to, disparagement of the MT5 trading platform or other practices which may be detrimental to the MT5 trading platform, the licensor, or public interest.')}</li>
            <li>{it.L('The Company sources market data from prime brokers who act as liquidity providers, thus executing the client\'s transactions through a pool of aggregated liquidity from top tier banks. The services offered by the Company do not include physical delivery of foreign currency by the Company or the prime brokers to the client. the client acknowledges and agrees that such data is proprietary to the Company and any such provider, and the client will not retransmit, redistribute, publish, disclose, or display in whole or in part such data to third parties. The client represents and warrants that they will only use such data for purposes of facilitating their entry into transactions with the Company on the client\'s MT5 Real Account in accordance with this agreement and not for any other purpose. This clause does not apply to Volatility Indices.')}</li>
        </ol>

        <h2 data-anchor='event-of-default'>{it.L('K. Event of Default')}</h2>
        <ol>
            <li>{it.L('Each of the following events constitute an "Event of Default":')}
                <ol>
                    <li>{it.L('The client passes away, becomes incapacitated, becomes of unsound mind, is unable to pay debts as they fall due, or goes bankrupt or becomes insolvent, as defined under any bankruptcy or insolvency law applicable to the client if the client is an individual.')}</li>
                    <li>{it.L('The Margin Level of the client\'s MT5 Real Account reaches or falls below the Stop Out Level.')}</li>
                    <li>{it.L('The client acts in breach of any warranty or representation made under this agreement, and/or any information provided to the Company in connection with this agreement is, or becomes, untrue or misleading.')}</li>
                    <li>{it.L('The client\'s debts are not settled as, and when, they fall due.')}</li>
                </ol>
            </li>
            <li>{it.L('Rights on Default')}
                <ol>
                    <li>{it.L('On the occurrence of an Event of Default, the Company may exercise its rights under this clause, at any time and without prior notice:')}
                        <ol>
                            <li>{it.L('Closing or partly closing all, or any, of the client\'s Open Positions based on the prevailing prices available in the relevant markets')}</li>
                            <li>{it.L('Suspending the client\'s MT5 Real Account and refusing to execute any Orders to enter into further transactions with the client')}</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>{it.L('In the event of the client failing to transfer funds to the client\'s MT5 Real Account, the Company may, at its absolute discretion, allow the client\'s Open Positions to remain open and allow the client to place new Orders to open a transaction. The client acknowledges that, when their Open Positions are allowed to remain open, they may incur further losses.')}</li>
        </ol>

        <h2 data-anchor='manifest-error'>{it.L('L. Manifest Error')}</h2>
        <ol>
            <li>{it.L('[_1] reserves the right to void or amend the contractual terms of any transactions that the Company reasonably believes are entered into at prices that do not reflect fair market prices or that are entered into at an abnormally low level of risk due to an obvious or palpable error (a "Manifest Error"). In deciding whether an error is a Manifest Error, the Company may take into account any relevant information, including the state of the underlying market at the time of the error and any error within, or lack of clarity of, any information source or pronouncement. The client has a duty to report to the Company any such problems, errors, or suspected system inadequacies that The client may experience and may not abuse or arbitrage such system problems or errors for profit. The Company will endeavour to resolve any such difficulties in the shortest time possible.', it.website_name)}</li>
            <li>{it.L('Any amendments to the contractual terms of Manifestly Erroneous contracts shall be reasonable and fair and may involve closing and/or opening of positions, placing/deleting Orders without the client\'s involvement, making changes in Open Positions, deleting trades from trading history, etc. Monies exchanged between the client and the Company in connection with the Manifestly Erroneous contracts shall be returned to the recipient according to the amendments made to the contractual terms and conditions of this agreement.')}</li>
        </ol>

        <h2 data-anchor='force-majeure-events'>{it.L('M. Force majeure events')}</h2>
        <ol>
            <li>{it.L('A force majeure event, if and when determined, means, (i) the Company, by reason of force majeure or act of state, is prevented from, hindered, or delayed in delivering or receiving, or is unable to deliver or receive, any quotation of the Bid and Ask Prices of a market in one or more of the instruments in which the Company ordinarily deals in transactions; (ii) an excessive movement in the market of the instrument or the Company\'s reasonable anticipation of the potential occurrence of market disruption.')}</li>
            <li>{it.L('If the Company determines that a force majeure event exists, the Company shall promptly give notice thereof to the client. Subsequently, the Company may, at its absolute discretion, take one or more steps, including but not limited to the following:')}
                <ol>
                    <li>{it.L('Suspend the trading of the affected instrument')}</li>
                    <li>{it.L('Alter the normal trading times for the affected instrument')}</li>
                    <li>{it.L('Close all or any of the client\'s Open Positions at a closing level that is reasonably available')}</li>
                    <li>{it.L('Change the Margin rate in relation to both Open Positions and new Orders')}</li>
                </ol>
            </li>
            <li>{it.L('The Company shall not be in breach of its obligation under this agreement and shall not be held liable for any failure of or delay in performing its obligations under this agreement if such failure or delay is the result of the occurrence of a force majeure event.')}</li>
            <li>{it.L('Nothing in this section on force majeure events shall be taken as indicating that they constitute an Event of Default.')}</li>
            <li>{it.L('This section on force majeure events does not apply to Volatility Indices.')}</li>
        </ol>

        <h2 data-anchor='representations-and-warranties'>{it.L('N. Representations and warranties')}</h2>
        <ol>
            <li>{it.L('When the client enters into this agreement, they make the following representations and warranties to the Company and agree that such representations and warranties are deemed repeated each time the client opens or closes a transaction:')}
                <ol>
                    <li>{it.L('If the client is an individual, they are over 18 years old and they have full capacity to enter into this agreement.')}</li>
                    <li>{it.L('The client has fully read and understood the (i) Risk disclosure statement, (ii) Order execution policy, and (iii) Terms and conditions attached to this agreement before requesting to open an MT5 Real Account with the Company.')}</li>
                    <li>{it.L('The client has all necessary authority, powers, consents, licences, and authorisations and have taken all necessary actions to enable the client to enter into and perform this agreement and such transactions lawfully.')}</li>
                    <li>{it.L('The execution, delivery, and performance of this agreement and each transaction will not violate any law, ordinance, charter, by-law, or rule applicable to the client or the jurisdiction in which the client is resident.')}</li>
                    <li>{it.L('The client is willing and financially able to sustain a total loss of funds resulting from a transaction, which may exceed the client\'s initial deposit unless they are a retail customer of Binary Investments (Europe) Ltd.')}</li>
                    <li>{it.L('Any information which the client provides or have provided to the Company in respect of their financial position, domicile, or other matters is accurate and not misleading in any material respect.')}</li>
                </ol>
            </li>
            <li>{it.L('The client promises the following:')}
                <ol>
                    <li>{it.L('They will, at all times, obtain, comply with, and do all that is necessary to maintain in full force and effect all authority, powers, consents, licences, and authorities referred to in this clause.')}</li>
                    <li>{it.L('They will take all reasonable steps to comply with any law, ordinance, charter, by-law, or rule applicable to the client or the jurisdiction in which the client is resident.')}</li>
                    <li>{it.L('They will provide the Company with any information that [_1] may reasonably require to fully satisfy the demands or the requirements of the applicable government authority, upon the Company\'s request.', it.website_name)}</li>
                    <li>{it.L('They will use the Margin trading services described in this agreement in good faith and will not use any software, algorithm, or any trading strategy to manipulate or take unfair advantage of the way that the Company\'s Bid and Ask Prices are quoted. The client shall observe the standard of behaviour reasonably expected of persons in the client\'s position and not take any step which would cause [_1] to fail to observe the standard of behaviour reasonably expected of persons in the Company\'s position.', it.website_name)}</li>
                </ol>
            </li>
            <li>{it.L('The client acknowledges that the Company reserves the right to void or close out one or more of the client\'s transactions if the Company observes any breaches of warranty given under this agreement.')}</li>
        </ol>

        <h2 data-anchor='indemnification'>{it.L('O. Indemnification')}</h2>
        <ol>
            <li>{it.L('Neither the Company nor any of its directors, officers, managers, employees, or agents shall be liable for any loss, damage, or debt to the client arising directly or indirectly out of, or in connection with, this agreement. The client agrees to indemnify the Company and its directors, officers, managers, employees, or agents from, and against, any and all liabilities, losses, damages, costs, and expenses (including reasonable attorney\'s fees) incurred arising out of the client\'s failure to comply with any and all of their obligations set forth in this agreement and/or the Company\'s enforcement against the client of any and all of its rights under this agreement.')}</li>
            <li>{it.L('Without prejudice to any other terms of this agreement, neither the Company nor any of its directors, officers, managers, employees, or agents shall be liable to the client in relation to any loss that they have incurred whether directly or indirectly by any cause beyond the Company\'s control, including, but not limited to, any delay or defect in or failure of the whole or any part of the MT5 trading platform or any systems or network links.')}</li>
            <li>{it.L('The Company does not make any warranty, express or implied, that any pricing or other information provided through the MT5 trading platform or otherwise is correct.')}</li>
        </ol>

        <h2 data-anchor='miscellaneous'>{it.L('P. Miscellaneous')}</h2>
        <ol>
            <li>{it.L('The client agrees that in any legal, arbitration, mediation, regulatory, administration, or any other proceedings initiated by them or by [_1], the Company\'s records related to the client\'s dealings shall constitute evidence. Subject to the laws and any court, tribunal, competent authority, or government authority orders, requests, instructions, or guidelines, the client shall not object to the admission of such records on the grounds that they are not originals or in writing, or that they are produced by computers or any other electronic systems whatsoever. The client shall not rely on the Company to meet any of their disclosures or other obligations imposed by any court, tribunal, competent authority, or government authority.', it.website_name)}</li>
            <li>{it.L('If any provision of this agreement shall be held invalid or unenforceable by a court or regulatory body of competent jurisdiction, the remainder of this agreement shall remain in full force and effect.')}</li>
            <li>{it.L('In connection with this agreement and all transactions contemplated by this agreement, the client agrees to execute and deliver such additional documents and instruments and to perform such additional acts as may be necessary or appropriate to effectuate, carry out, and perform all of the terms, provisions, and conditions of this agreement. The client shall cooperate fully with any investigation by any regulatory authority and promptly provide the regulatory authority with such information and records as may be requested in compliance with any law, ordinance, charter, by-law, or rule applicable to the client or the jurisdiction in which they are resident.')}</li>
        </ol>

        <h2 data-anchor='introducing-brokers'>{it.L('Q. Introducing Brokers')}</h2>
        <p>{it.L('This Agreement sets out the terms and conditions between [_1] and the Introducing Broker in providing Introducing Broker services to the Company in accordance with the provisions and terms of this Agreement.', it.website_name)}</p>
        <p>{it.L('The services offered by the Introducing Broker to the clients are offered because the Introducing Broker is approved and qualified to offer such services. Additionally, such services are offered by the Introducing Broker fairly, honestly, and in good faith and in accordance with all business-ethics rules.')}</p>
        <p>{it.L('It is hereby agreed as follows: ')}</p>
        <ol>
            <Li
                title={it.L('Definitions')}
                paragraph={it.L('In this Agreement, unless the context otherwise requires, the following definitions hold:')}
            >
                <p><strong>{it.L('Account')}</strong>{it.L(' means a client\'s trading account opened with Binary in accordance with the account procedure provided on [_1].', it.website_name)}</p>
                <p><strong>{it.L('Agreement')}</strong>{it.L(' means this agreement and includes all appendices, schedules and annexures as amended, supplemented, replaced, or novated.')}</p>
                <p><strong>{it.L('Affiliate Arrangement')}</strong>{it.L(' means an arrangement where Binary devotes its time and resources to identify prospective clients in a specified manner.')}</p>
                <p><strong>{it.L('Associate')}</strong>{it.L(' means any physical person or any type of legal person or entity or body of persons which has business, commercial, financial, entrepreneurial, employment, agency, family, personal, and other links or bonds with the Introducing Broker and includes any person who has the same personal information, IP address, physical or mailing address, telephone number, email address, or passport details as the Introducing Broker.')}</p>
                <p><strong>{it.L('Authorisation')}</strong>{it.L(' means any written notarisation, certificate, license, approval, permission, Authority, exemptions, registration, filing, agreement, consent, notice, or notice of non-objection.')}</p>
                <p><strong>{it.L('Authority')}</strong>{it.L(' means organisation, whether governmental or not, or physical person or any type of legal person or entity or body of persons and any executor, administrator, or representative of such Competent Authority located in any jurisdiction that has legally delegated or invested authority, capacity, power, or competence to perform a designated function.')}</p>
                <p><strong>{it.L('Business Day')}</strong>{it.L(' means Monday to Friday (UTC+8).')}</p>
                <p><strong>{it.L('Client Information')}</strong>{it.L(' means all of the information about the client, including but not limited to their name, address, contact details, account details and trading history.')}</p>
                <p><strong>{it.L('Commission')}</strong>{it.L(' means the commission payable by Binary to the Introducing Broker as set out in the Appendix below.')}</p>
                <p><strong>{it.L('Competent Authority')}</strong>{it.L(' means any organisation, whether governmental or not, or physical person or any type of legal person or entity or body of persons and any executor, administrator, or representative of such Competent Authority located in any jurisdiction that has legally delegated or invested authority, capacity, power, or competence to perform a designated function.')}</p>
                <p><strong>{it.L('Company or Binary')}</strong>{it.L(' means [_1].', it.website_name)}</p>
                <p><strong>{it.L('Effective Date')}</strong>{it.L(' means the commencement date of this Agreement.')}</p>
                <p><strong>{it.L('Introducing Broker')}</strong>{it.L(' means any potential individual or entity willing to provide Binary with IB services.')}</p>
                <p><strong>{it.L('Law')}</strong>{it.L(' means all laws including rules of common law, principles of equity, statutes, regulations, proclamations, ordinances, by-laws, rules, regulatory principles and requirements, policy statements, practice notes, mandatory codes of conduct, writs, orders, injunctions, judgments, determinations, and statutory licence conditions.')}</p>
                <p><strong>{it.L('Malicious Activity')}</strong>{it.L(' means any manipulations of Binary\'s systems and business in ways which resulted in any adverse, special, incidental, punitive or consequential loss or damages to Binary.')}</p>
                <p><strong>{it.L('Marketing Materials')}</strong>{it.L(' means any content, whether in electronic or hard copy form, created by or at the direction of Binary, for the purpose of marketing the Binary business or services, and incorporating the Binary Trademarks.')}</p>
                <p><strong>{it.L('Trademark')}</strong>{it.L(' means any trademarks, signs, logos, designs, expressions, and trading names owned by or licensed to Binary, whether registered or not registered, and any subsequent trademark created.')}</p>
            </Li>
            <Li
                title={it.L('Acceptance of Agreement')}
                paragraph={it.L('By indicating the acceptance of the terms and conditions of this Agreement and continuing with the Introducing Broker application to join the Company\'s Introducing Broker programme, the Introducing Broker is hereby agreeing with all the terms and provisions stated herein.')}
            />
            <p>{it.L('The Company shall, in its absolute discretion, determine whether the application of the Introducing Broker has been successful. The Company\'s decision is final and is not subject to any appeal.')}</p>
            <p>{it.L('The Company shall notify the Introducing Broker upon the successful approval of the Introducing Broker application.')}</p>
            <Li
                title={it.L('General')}
            >
                <p>{it.L('This Agreement constitutes the entire agreement between the parties, and no earlier representation or arrangement, written or oral, relating to any matter dealt with in this Agreement between the parties shall have any force or effect before the Effective Date.')}</p>
                <p>{it.L('Each party shall do anything reasonably required by the other party to give effect to the provisions and terms of this Agreement.')}</p>
                <p>{it.L('Should any provisions or terms of this Agreement become invalid or unenforceable, the provision or term shall be severed from the remainder of the Agreement and shall not render the remainder Agreement to be invalid or unenforceable.')}</p>
                <p>{it.L('If the Introducing Broker breaches any of the provisions or terms of this Agreement, the Company shall have the discretion to suspend any or all payments to the Introducing Broker.')}</p>
                <p>{it.L('The Company may modify any provisions or terms of this Agreement at any time. It is the responsibility of the Introducing Broker to consistently review all modifications in the Agreement made on the website.')}</p>
                <p>{it.L('The section headings are for convenience only and shall not control or affect the meaning, construction, scope, and intent of any of the provisions of this Agreement.')}</p>
            </Li>
            <Li
                title={it.L('Introduction of clients and instructions')}
            >
                <p>{it.L('The Introducing Broker shall use their experience, knowledge, and best efforts to provide IB services to Binary, and Binary shall remunerate the Introducing Broker for IB services in accordance to the Commission structure listed on [_1] Introducing Broker programme.', it.website_name)}</p>
                <p>{it.L('Upon request from the Company or its legal representatives or government regulators, the Introducing Broker must promptly grant Binary with unlimited access to information to the extent that Binary requires to satisfy any legal or regulatory requirement or obligation.')}</p>
                <p>{it.L('The parties agree that the relationship between Binary and the Introducing Broker is not an exclusive relationship and both the Introducing Broker and Binary may enter into similar relationships with other parties.')}</p>
            </Li>
            <Li
                title={it.L('The Introducing Broker\'s obligations')}
            >
                <p>{it.L('The Introducing Broker must notify the Company immediately if they cease to possess any relevant Authorisation required or cease to be competent, capable, adequate, or qualified to effectively perform all their duties and obligations undertaken and agreed under this Agreement for any reason, including but not limited to lack of knowledge, expertise, experience, skills, and time. The Introducing Broker must also promptly notify the Company in writing upon the initiation of any proceedings in bankruptcy, dissolution, or liquidation.')}</p>
                <p>{it.L('In providing IB services, the Introducing Broker shall')}
                    <ol>
                        <li>{it.L('Use their best endeavours to attract potential clients for Binary')}</li>
                        <li>{it.L('Use the Marketing Materials provided by Binary solely for the purpose of providing IB services and in accordance with Binary\'s instructions')}</li>
                        <li>{it.L('Provide Binary with any information that they have become aware of which may result in an adverse or harmful consequence for Binary and its reputations')}</li>
                        <li>{it.L('Implement and comply with all business-related directions, policies, and procedures of Binary as enacted, amended, or replaced from time to time')}</li>
                        <li>{it.L('Comply with any Competent Authorities\' requests or directions')}</li>
                        <li>{it.L('Perform IB services and other obligations mentioned here at their own cost and risk')}</li>
                        <li>{it.L('Fairly and accurately describe Binary\'s business and services in a transparent manner to the clients')}</li>
                        <li>{it.L('Provide information to clients only on technical and educational matters')}</li>
                        <li>{it.L('Inform any clients introduced to Binary that the trading services and products are offered by or through Binary and not the Introducing Broker')}</li>
                        <li>{it.L('Inform any clients introduced to Binary of any matter that the Company may reasonably consider necessary in order to comply with any legal/regulatory requirements ')}</li>
                    </ol>
                </p>
                <p>{it.L('Where the Introducing Broker owns, or operates, a website and wishes to include Binary\'s services, the Introducing Broker shall')}
                    <ol>
                        <li>{it.L('Receive the approval of the Company to include any information in relation to Binary')}</li>
                        <li>{it.L('Provide a web-link from their own website to [_1]', it.website_name)}</li>
                        <li>{it.L('Include a disclaimer or notice that the intellectual property rights of the Trademark solely belong to Binary and any use of it is strictly prohibited unless Binary has given such authorisation.')}</li>
                    </ol>
                </p>
                <p>{it.L('The Introducing Broker consents to the disclosure of their identity on the webpage of [_1] or any publicly accessible medium managed by Binary.', it.website_name)}</p>
                <p>{it.L('The Introducing Broker pledges that they shall not at any time')}
                    <ol>
                        <li>{it.L('Indicate that Binary or the Introducing Broker and their Associates will guarantee a client\'s profit or loss or limit the losses of any client')}</li>
                        <li>{it.L('Misrepresent Binary or the services that are offered by Binary')}</li>
                        <li>{it.L('Engage in misleading or deceptive conduct or illusory or deceptive advertising')}</li>
                        <li>{it.L('Prepare and publish any content or place any advertisements that refer to Binary and its relationship with Binary without the prior written consent of Binary')}</li>
                        <li>{it.L('Amend or change all or any part of the Marketing Material without Binary\'s prior written consent')}</li>
                        <li>{it.L('Use the name \'Binary\' or any derivation of that name such as \'[_1]\' or the Binary Trademarks in a way that might compete with Binary\'s search engine optimisation without the prior written consent of Binary, which includes using the name \'[_1]\' on the title tag of the Introducing Broker\'s website', it.website_name)}</li>
                        <li>{it.L('Refer clients to Binary with the knowledge, or with a reasonably expected knowledge, that these clients engage in such conduct that constitutes Malicious Activity')}</li>
                        <li>{it.L('Provide any financial/investment trading advice to clients (Binary shall not be liable to the Introducing Broker and the client for any misrepresentation or fraudulent or negligent misstatement made by the Introducing Broker. The Introducing Broker shall also hold Binary harmless and shall indemnify Binary and its directors, officers, managers, employees, or agents from and against any liabilities, losses, damages, costs, and expenses, including all and any legal fees incurred arising out of the failure of the Introducing Brokers to comply with any or all of their obligations set forth in this Agreement.)')}</li>
                    </ol>
                </p>
            </Li>
            <Li
                title={it.L('Accounts')}
                paragraph={it.L('Binary shall have the absolute discretionary power to accept or reject an application to open an Account by a client introduced by the Introducing Broker.')}
            />
            <Li
                title={it.L('Commissions')}
                paragraph={it.L('Commission shall only be paid where the following are met cumulatively:')}
            >
                <ol>
                    <li>{it.L('Closed/complete trades')}</li>
                    <li>{it.L('Closed trades made by clients introduced by an Introducing Broker and duly approved by Binary')}</li>
                </ol>
                <p>{it.L('However, Introducing Brokers contracted with Binary Investments (Europe) Ltd shall be paid on a Cost Per Acquisition (CPA) deal only, whereby the Introducing Broker shall become eligible for payment of a set amount only upon the introduction of a client to Binary and as long as the Introducing Broker is providing an enhanced service to the clients.')}</p>
                <p>{it.L('Commission will not be paid for Accounts that have been opened or traded by an Associate of the Introducing Broker.')}</p>
                <p>{it.L('Binary will pay the Commission to the Introducing Broker before or on the 15th day of the month following the calendar month in which the trades were made (Due Date).')}</p>
                <p>{it.L('The Introducing Broker acknowledges that the Commission received by the Introducing Broker pursuant to this Agreement fully compensates for its obligations under this Agreement.')}</p>
                <p>{it.L('The Introducing Broker is responsible for the payment of their own taxes, duties, fees, or other governmental levies or charges. Any fees payable by Binary to the Introducing Broker in connection with this Agreement are exclusive of any such taxes, duties, fees, or levies.')}</p>
                <p>{it.L('The clauses above shall not apply in its entirety to any Introducing Brokers who are contracted to provide Introducing Broker services with Binary Investments (Europe) Ltd.')}</p>
            </Li>
            <Li
                title={it.L('Introducing Broker warranties')}
                paragraph={it.L('The Introducing Broker warrants to the Company at all times that')}
            >
                <ol>
                    <li>{it.L('All information/documentations provided by the Introducing Broker when applying for Binary\'s Introducing Broker programme is true and accurate.')}</li>
                    <li>{it.L('They have obtained all Authorisations and are not aware of anything that shall or might reasonably be expected to prevent them from entering and performing all of their obligations under this Agreement.')}</li>
                    <li>{it.L('They are not aware of anything that shall, or might reasonably be expected to, prevent, or obstruct them from performing all of their obligations under this Agreement, in the manner and at the times contemplated by this Agreement.')}</li>
                    <li>{it.L('They will comply with all laws when performing their obligations under this Agreement.')}</li>
                    <li>{it.L('This Agreement has been duly executed and constitutes binding obligations on both parties, enforceable against it in accordance with its terms.')}</li>
                </ol>
            </Li>
            <Li
                title={it.L('Limitation of liability')}
            >
                <p>{it.L('Other than the payment of Commissions, Binary is not liable to the Introducing Broker or their Associates or any other person for any matter arising out of or in relation to this Agreement whether under the law of tort, contract, or equity or otherwise for any loss.')}</p>
                <p>{it.L('The Introducing Broker agrees to indemnify Binary against any loss that Binary may suffer or incur arising out of, or in connection with, any act or omission of the Introducing Broker, or as a result of any fraud, negligence, wilful default, or material breach of this Agreement.')}</p>
            </Li>
            <Li
                title={it.L('Term and termination of this Agreement')}
            >
                <p>{it.L('This Agreement shall commence on the Effective Date and will continue to be in full force and effect until this Agreement is terminated in accordance with the provisions and terms of this Agreement.')}</p>
                <p>{it.L('Either party may terminate this Agreement at any time by giving a seven-day (7) advanced written notice to the other party.')}</p>
                <p>{it.L('If any of the parties is a physical person, this Agreement shall be terminated in the event of death or physical or mental incapacity of such parties. ')}</p>
                <p>{it.L('This Agreement shall be terminated should the behaviour of the Introducing Broker constitute negligence, misconduct, or wilful default.')}</p>
                <p>{it.L('This Agreement shall be equally terminated in the event of bankruptcy, insolvency, or liquidation of either party. ')}</p>
                <p>{it.L('On termination of this Agreement')}
                    <ol>
                        <li>{it.L('Binary shall pay Commissions for any trades placed by clients prior to the date of termination but shall not be liable to pay Commissions for any trades placed by clients on or after the date of termination. In the case of the Introducing Brokers who are contracted with Binary Investments (Europe) Ltd, any pending Commission from the CPA deal prior to the date of termination shall be paid in full.')}</li>
                        <li>{it.L('The Introducing Broker shall immediately cease using the Marketing Materials whether in hard copy or electronically on any website and return all Marketing Materials to Binary. They shall also cease referring to Binary and shall remove all of the Binary Trademarks, including logos, branding, and other references to Binary from their website and/or marketing materials.')}</li>
                        <li>{it.L('The Introducing Broker acknowledges that on termination, they have no claims against Binary whatsoever and are not entitled to any compensation or claim arising from the termination.')}</li>
                        <li>{it.L('If the Introducing Broker engages in Malicious Activity, Binary, in its absolute discretion, may')}
                            <ol>
                                <li>{it.L('Refuse to pay any Commission to the Introducing Broker engaged in the Malicious Activity')}</li>
                                <li>{it.L('Set off any Commission paid or payable by Binary to the Introducing Broker against any amounts held in any accounts of the Company')}</li>
                            </ol>
                        </li>
                    </ol>
                </p>
            </Li>
            <Li
                title={it.L('Notices')}
            >
                <p>{it.L('Any notice required by this Agreement shall be in writing and shall be emailed to the following addresses:')}
                    <ol>
                        <li><a href='mailto:compliance@binary.com'>compliance@binary.com</a></li>
                        <li><a href='mailto:affiliates@binary.com'>affiliates@binary.com</a></li>
                    </ol>
                </p>
                <p>{it.L('In any event, an email notice shall be presumably and sufficiently served upon the completion of sending the email. Should the email be sent on a non-Business Day, it shall be presumably and sufficiently served on the next Business Day.')}</p>
            </Li>
            <Li
                title={it.L('Confidential information')}
            >
                <p>{it.L('Neither party shall, without the prior written consent of the other, disclose any details or information acquired directly or indirectly as a result of the relationship contemplated by this Agreement to any person or use the same for their own benefit, other than as contemplated in this Agreement.')}</p>
                <p>{it.L('The clause above shall not apply to any information to the extent')}
                    <ol>
                        <li>{it.L('To which it, at the time of execution of this Agreement was, or subsequently has become, in the public domain through no fault of the parties')}</li>
                        <li>{it.L('That the recipient is obliged by Law to disclose such information, provided that the recipient promptly advises the other party of the legal obligation to disclose such information')}</li>
                        <li>{it.L('That the parties agree in writing that both parties will be exempt from the provisions of this clause')}</li>
                    </ol>
                </p>
                <p>{it.L('Each party will')}
                    <ol>
                        <li>{it.L('Take all necessary steps at all times to ensure the non-disclosure and confidentiality of other party\'s confidential information')}</li>
                        <li>{it.L('Require its Associates, employees, and agents not to disclose or copy any of the other party\'s confidential information for any purpose except as permitted under this Agreement')}</li>
                    </ol>
                </p>
                <p>{it.L('The obligations under this clause shall survive after the termination of this Agreement.')}</p>
            </Li>
            <Li
                title={it.L('Assignment')}
            >
                <p>{it.L('Binary may assign any or all of its rights under this Agreement to a third party.')}</p>
                <p>{it.L('The Introducing Broker may not assign any or all of its rights under this Agreement without the prior written consent of Binary.')}</p>
            </Li>
            <Li
                title={it.L('Agency or partnership')}
                paragraph={it.L('The parties agree that nothing in this Agreement creates a relationship between them of employer/employee or principal/agent, a joint venture, or a partnership. Each party shall perform this Agreement as an independent contractor and shall solely be responsible for its own action or inaction.')}
            />

            <Li
                title={it.L('Force majeure event')}
            >
                <p>{it.L('No party shall be deemed liable for a partial or complete failure to meet its obligations under this Agreement, in case of force majeure events, including but not limited to civil war, unrest, insurrection, international intervention, any governmental actions, exchange controls, nationalisations, devaluations, forfeitures, natural disasters, act of God, and other inevitable or unforeseeable, unanticipated, and unpredicted events not depending on the will of the parties.')}</p>
                <p>{it.L('The party that, due to force majeure events, is not able to meet their obligations under this Agreement, shall inform the other party in writing within six (6) days after the occurrence of such an event.')}</p>
                <p>{it.L('Should force majeure events last for more than thirty (30) Business Days, the party not suffering force majeure events may terminate this Agreement immediately.')}</p>
            </Li>
            <Li
                title={it.L('Governing law')}
                paragraph={it.L('This Agreement will be governed and construed in accordance with the laws of the country in which the relevant subsidiary is located, and the parties shall submit to the non-exclusive jurisdiction of the same courts.')}
            />
        </ol>

        <h2 data-anchor='interpretation-of-terms'>{it.L('R. Interpretation of terms')}</h2>
        <ol>
            <Li
                title={it.L('Account Balance')}
                subtitle={it.L('The client\'s Account Balance represents')}
                sub_list={[
                    it.L('Net of fund transfers between the client\'s [_1] account and their MT5 Real Account', it.website_name),
                    it.L('Net of realised profits credited to the client\'s MT5 Real Account and realised losses debited from their MT5 Real Account'),
                    it.L('Net of any other money credited to the client\'s MT5 Real Account and debited from their MT5 Real Account'),
                ]}
                paragraph={it.L('The client\'s Account Balance includes Margin Requirement. The amount of the client\'s Account Balance in excess of Margin Requirement is available for withdrawal. The amount set aside for Margin Requirement is not available for the client\'s withdrawal.')}
            />
            <Li title={it.L('Account Deposit Currency')} subtitle={it.L('the currency in which the client\'s MT5 Real Account will be operated')} />
            <Li title={it.L('Account Equity')} subtitle={it.L('The client\'s Account Equity refers to the sum of their Account Balance and the net of unrealised profit and loss.')} />
            <Li title={it.L('Account Free Margin')} subtitle={it.L('The client\'s Account Equity minus their Total Margin')} />
            <Li title={it.L('[_1] account', it.website_name)} subtitle={it.L('The client\'s Real Money Account opened with [_1], which the client uses to trade binary options with [_1] trading platform and Binary Webtrader', it.website_name)} />
            <Li title={it.L('Event')} subtitle={it.L('Event examples include circumstances whereby the type of transaction, to which the client\'s Order is related, ceases to be offered, or a Corporate Event, or the insolvency of a company whose shares are related to the subject matter of the Order, and others.')} />
            <Li title={it.L('Leverage')} subtitle={it.L('a ratio which determines the minimum Margin requirement for a trader to open a trade')} />
            <Li title={it.L('Lot')} subtitle={it.L('a transaction unit representing a standardised quantity of the Underlying Instrument, as specified in the Product Disclosure and Specifications. One Lot constitutes the equivalent of 100,000 units of the base currency.')} />
            <Li title={it.L('Limit/Limit Price')} subtitle={it.L('the price specified in the client\'s Limit Order')} />
            <Li title={it.L('Limit Order')} subtitle={it.L('an Order to open or close a transaction if and when a price quote becomes more favourable to the client when compared against the current price')} />
            <Li title={it.L('Margin')} subtitle={it.L('the amount set aside by the Company from the client\'s Account Balance in order to open and maintain a transaction, to cover the client\'s potential loss, if it occurs')} />
            <Li title={it.L('Margin Call')} subtitle={it.L('Margin Call occurs when the Margin Level is less than the Margin Level set for the client\'s account.')} />
            <Li title={it.L('Margin Level')} subtitle={it.L('ratio of Account Equity to Total Margin, expressed as a percentage')} />
            <Li title={it.L('Market Order')} subtitle={it.L('an Order to open or close a position in the market identified by reference to an Underlying Instrument at the current price')} />
            <Li title={it.L('Margin Requirement')} subtitle={it.L('a percentage of the value and contract size of symbols for which there are Open Positions')} />
            <Li title={it.L('Next Available Price')} subtitle={it.L('nearest price reasonably available and quoted by [_1] when the Company Price quotation reaches or goes beyond the level of the client\'s Stop Order', it.website_name)} />
            <Li title={it.L('Open Position')} subtitle={it.L('the position in a market identified by reference to an Underlying Instrument, created by opening a transaction as a result of placing a buy or sell Order to the extent that such position has not been closed in whole or in part by an opposite Order under this agreement')} />
            <Li title={it.L('Order')} subtitle={it.L('an execution instruction given by the client to the Company to open or close a position in a market identified by reference to the Underlying Instrument, including Market Order, Stop Order, Limit Order etc.')} />
            <Li title={it.L('Price(s)/Pricing Data')} subtitle={it.L('Bid and Ask Price(s) of each financial instrument in the transaction system, quoted at market price at the moment of pricing')} />
            <Li dataShow='eucountry' title={it.L('Professional Client')} subtitle={it.L('a professional client as defined in the Directive 2004/39/EC of the European Parliament and of the Council (MiFID) or subsequent Directive 2014/65/EU of the European Parliament and of the Council (MiFID II), whichever is in force')} />
            <Li title={it.L('MT5 Real Account')} subtitle={it.L('The client\'s Real Money Account opened with the [_1] MT5 trading platform and licensed by MetaQuotes Software Corporation', it.website_name)} />
            <Li dataShow='eucountry' title={it.L('Retail Client')} subtitle={it.L('a client that is not a Professional client or Eligible Counterparty')} />
            <Li title={it.L('Roll-over')} subtitle={it.L('In the event that the Company does not receive Orders from the client to close an Open Position by the close of a business day, the Company will roll over the said Open Position to the following business day.')} />
            <Li title={it.L('Roll-over Credit/Debit')} subtitle={it.L('Accounts with Open Positions being rolled over shall be credited or debited with an amount referred to as the Roll-over Credit/Debit, which is determined by the Company.')} />
            <Li title={it.L('Settlement')} subtitle={it.L('A Settlement occurs when the client\'s account with the Company is credited or charged with the net amount of the results of a transaction.')} />
            <Li title={it.L('Spread')} subtitle={it.L('the difference between the Bid and Ask Price of a financial instrument')} />
            <Li title={it.L('Stop Order/Stop Loss Order')} subtitle={it.L('an Order to execute a transaction to close an Open Position when the price reaches the client\'s specified price')} />
            <Li title={it.L('Stop Out Level')} subtitle={it.L('the Margin Level at or below which the client\'s Open Positions may be closed forcefully and automatically with or without the client\'s prior consent')} />
            <Li title={it.L('Total Margin')} subtitle={it.L('the aggregate of all Margin Requirements in the client\'s MT5 Real Account')} />
            <Li title={it.L('Underlying Instrument')} subtitle={it.L('the underlying currency, or financial instrument, on which the price of the CFD is based')} />
        </ol>

        <BIEL />
    </div>
);

export default TermsAndConditions;
