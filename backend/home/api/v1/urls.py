from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CustomTextViewSet,
    Fftrghy64rjrViewSet,
    GtjguyViewSet,
    HHHhgfhfhgfViewSet,
    HomePageViewSet,
    JHGJGJGViewSet,
)

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("customtext", CustomTextViewSet)
router.register("homepage", HomePageViewSet)
router.register("fftrghy64rjr", Fftrghy64rjrViewSet)
router.register("gtjguy", GtjguyViewSet)
router.register("jhgjgjg", JHGJGJGViewSet)
router.register("hhhhgfhfhgf", HHHhgfhfhgfViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
