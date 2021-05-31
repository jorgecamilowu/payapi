import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { colors } from '../../theme';
import { Benefit, PricingPlan } from '../../models';
import { formatMoney } from '../../functions/format';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexFlow: 'column',
      maxWidth: theme.spacing(43.75),
      margin: theme.spacing(1),
      [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        maxWidth: theme.spacing(28.125),
      },
    },
    title: {
      color: colors.darkPink,
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
      },
    },
    item: {
      margin: theme.spacing(1, 0),
    },
    benefitsListContainer: {
      display: 'flex',
      flexFlow: 'column',
    },
    benefitsListRow: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: theme.spacing(0.5, 0),
    },
    benefitsListRowElement: {
      margin: theme.spacing(0, 1.2),
    },
    disabledBenefit: {
      opacity: 0.5,
    },
    invisible: {
      opacity: 0,
    },
    responsiveHr: {
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(28.125),
      },
    },
  }),
);

interface Props {
  plan: PricingPlan;
  catalog: Benefit[];
  onRequestAccess?: () => void;
}

export default function PricingPlanContainer({
  plan,
  catalog,
  onRequestAccess,
}: Props): ReactElement {
  const { name, description, price, benefits } = plan;
  const classes = useStyles();
  const catalogRef = new Set(benefits.map((ele) => ele.id));

  const fullHr = <hr className={classes.responsiveHr} />;
  const benefitsList = (
    <div className={classes.benefitsListContainer}>
      {catalog.map((benefit) => {
        const isDisabled = !catalogRef.has(benefit.id);
        return (
          <div
            className={classes.benefitsListRow}
            key={`plan-${benefit.id}-${benefit.name}`}
          >
            <Image
              src="/shared/desktop/icon-check.svg"
              width={12}
              height={8}
              className={clsx(
                classes.benefitsListRowElement,
                isDisabled && classes.invisible,
              )}
            />
            <Typography
              variant="body1"
              className={clsx(
                classes.benefitsListRowElement,
                isDisabled && classes.disabledBenefit,
              )}
            >
              {benefit.name}
            </Typography>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <Typography variant="h3" className={classes.title}>
          {name}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="subtitle1">{formatMoney(price)}</Typography>
      </div>
      <div className={classes.item}>{fullHr}</div>
      <div className={classes.item}>{benefitsList}</div>
      <div className={classes.item}>{fullHr}</div>
      <div className={classes.item}>
        <Button variant="outlined" color="secondary" onClick={onRequestAccess}>
          Request Access
        </Button>
      </div>
    </div>
  );
}
