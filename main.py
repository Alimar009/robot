def on_forever():
    robit.motor_run_dual(.1, 50, .2, 50)
    robit.motor_run_dual(robit.Motors.M1, 50, robit.Motors.M2, 50)
basic.forever(on_forever)
